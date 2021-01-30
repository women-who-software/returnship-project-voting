const path = require("path");
const express = require("express");
const xss = require("xss");
const logger = require("../logger");
const VoteService = require("./vote-service");

const voteRouter = express.Router();
const jsonParser = express.json();

const serializeVotes = (vote) => ({
  vote_id: vote.vote_id,
  project_id: vote.project_id,
  voter_name: xss(vote.voter_name),
  voter_slack_name: xss(vote.voter_slack_name),
  voter_email: xss(vote.voter_email),
});

voteRouter
  .route("/")

  .get((req, res, next) => {
    VoteService.getAll(req.app.get("db"))
      .then((votes) => {
        res.json(votes.map(serializeVotes));
      })
      .catch(next);
  })

  .post(jsonParser, (req, res, next) => {
    const { project_id, voter_name, voter_slack_name, voter_email } = req.body;

    const newVote = {
      project_id,
      voter_email,
    };

    const numberOfValues = Object.values(newVote).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    newVote.voter_slack_name = voter_slack_name;
    newVote.voter_name = voter_name;

    VoteService.insertVote(req.app.get("db"), newVote)
      .then((vote) => {
        logger.info(`Signup with email ${vote.vote_email} created.`);
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${vote.vote_email}`))
          .json(serializeVotes(vote));
      })
      .catch(next);
  });

voteRouter
  .route("/:vote_id")

  .all((req, res, next) => {
    VoteService.getById(req.app.get("db"), req.params.vote_id)
      .then((vote) => {
        if (!vote) {
          return res.status(404).json({
            error: { message: "Vote Not Found" },
          });
        }
        res.vote = vote;
        next();
      })
      .catch();
  })

  .get((req, res) => {
    res.json(serializeVotes(res.vote));
  })

  .delete((req, res, next) => {
    VoteService.deleteVote(req.app.get("db"), req.params.vote_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })

  .patch(jsonParser, (req, res, next) => {
    const { project_id, voter_name, voter_slack_name, voter_email } = req.body;

    const voteToUpdate = {
      project_id,
      voter_name,
    };

    const numberOfValues = Object.values(voteToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    voteToUpdate.voter_slack_name = voter_slack_name;
    voteToUpdate.voter_email = voter_email;

    VoteService.updateVote(req.app.get("db"), req.params.vote_id, voteToUpdate)
      .then((numRowsAffected) => {
        res.status(204).end();
      })
      .catch(next);
  });

  voteRouter
  .route("/project/:project_id")

  .get((req, res, next) => {
    VoteService.getAllProjectVotes(req.app.get("db"), req.params.project_id)
      .then((votes) => {
        res.json(votes.map(serializeVotes));
      })
      .catch(next);
  });

module.exports = voteRouter;
