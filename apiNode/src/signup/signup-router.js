const path = require("path");
const express = require("express");
const xss = require("xss");
const logger = require("../logger");
const SignupService = require("./signup-service");

const signupRouter = express.Router();
const jsonParser = express.json();

const serializeSignups = (signup) => ({
  signup_id: signup.project_id,
  project_id: signup.project_id,
  signup_name: xss(signup.signup_name),
  signup_github: xss(signup.signup_github),
  signup_email: xss(signup.signup_email),
});

signupRouter
  .route("/")

  .get((req, res, next) => {
    SignupService.getAll(req.app.get("db"))
      .then((signups) => {
        res.json(signups.map(serializeSignups));
      })
      .catch(next);
  })

  .post(jsonParser, (req, res, next) => {
    const { project_id, signup_name, signup_github, signup_email } = req.body;

    const newSignup = {
      project_id,
      signup_name,
    };

    const numberOfValues = Object.values(newSignup).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    newSignup.signup_github = signup_github;
    newSignup.signup_email = signup_email;

    SignupService.insertSignup(req.app.get("db"), newSignup)
      .then((signup) => {
        logger.info(`Signup with id ${signup.signup_id} created.`);
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${signup.signup_id}`))
          .json(serializeSignups(signup));
      })
      .catch(next);
  });

signupRouter
  .route("/:signup_id")

  .all((req, res, next) => {
    SignupService.getById(req.app.get("db"), req.params.signup_id)
      .then((signup) => {
        if (!signup) {
          return res.status(404).json({
            error: { message: "Signup Not Found" },
          });
        }
        res.signup = signup;
        next();
      })
      .catch();
  })

  .get((req, res) => {
    res.json(serializeSignups(res.signup));
  })

  .delete((req, res, next) => {
    SignupService.deleteSignup(req.app.get("db"), req.params.signup_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })

  .patch(jsonParser, (req, res, next) => {
    const { project_id, signup_name, signup_github, signup_email } = req.body;

    const signupToUpdate = {
      project_id,
      signup_name,
    };

    const numberOfValues = Object.values(signupToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    signupToUpdate.signup_github = signup_github;
    signupToUpdate.signup_email = signup_email;

    SignupService.updateSignup(
      req.app.get("db"),
      req.params.signup_id,
      signupToUpdate
    )
      .then((numRowsAffected) => {
        res.status(204).end();
      })
      .catch(next);
  });

signupRouter
  .route("/project/:project_id")

  .get((req, res, next) => {
    SignupService.getAllProjectSignups(req.app.get("db"), req.params.project_id)
      .then((signups) => {
        res.json(signups.map(serializeSignups));
      })
      .catch(next);
  });

module.exports = signupRouter;
