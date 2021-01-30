const path = require("path");
const express = require("express");
const xss = require("xss");
const logger = require("../logger");
const AdminService = require("./admin-service");

const adminRouter = express.Router();
const jsonParser = express.json();

const serializeAdmin = (admin) => ({
  admin_name: xss(admin.admin_name),
  password: xss(admin.password),
  chapter_name: xss(admin.chapter_name),
});

adminRouter
  .route("/")

  .post(jsonParser, (req, res, next) => {
    const { admin_name, password, chapter_name } = req.body;

    const newAdmin = {
      admin_name, password, chapter_name
    };

    const numberOfValues = Object.values(newVote).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    AdminService.insertAdmin(req.app.get("db"), newAdmin)
      .then((admin) => {
        logger.info(`Admin with id ${admin.admin_id} created.`);
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${admin.admin_id}`))
          .json(serializeAdmin(admin));
      })
      .catch(next);
  });

adminRouter
  .route("/:admin_name")

  .all((req, res, next) => {

    console.log('req.params', req.params);
    
    AdminService.getByName(req.app.get("db"), req.params.admin_name)
      .then((admin) => {
        if (!admin) {
          return res.status(404).json({
            error: { message: "Admin Not Found" },
          });
        }
        res.admin = admin;
        next();
      })
      .catch();
  })

  .get((req, res) => {
    res.json(serializeAdmin(res.admin));
  })

  .delete((req, res, next) => {
    AdminService.deleteAdmin(req.app.get("db"), req.params.admin_name)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })

  .patch(jsonParser, (req, res, next) => {
    const { admin_name, password, chapter_name } = req.body;

    const adminToUpdate = {
      admin_name, password, chapter_name
    };

    const numberOfValues = Object.values(adminToUpdate).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    AdminService.updateAdmin(
      req.app.get("db"),
      req.params.admin_name,
      adminToUpdate
    )
      .then((numRowsAffected) => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = adminRouter;
