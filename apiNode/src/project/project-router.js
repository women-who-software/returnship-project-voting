const path = require("path");
const express = require("express");
const xss = require("xss");
const logger = require("../logger");
const ProjectService = require("./project-service");

const projectRouter = express.Router();
const jsonParser = express.json();

const serializeProjects = (project) => ({
  project_id: project.project_id,
  project_name: xss(project.project_name),
  project_desc: xss(project.project_desc),
  client_name: xss(project.client_name),
  client_company: xss(project.client_company),
  client_phone: xss(project.client_phone),
  client_email: xss(project.client_email),
  project_status: xss(project.project_status),
  project_stack: xss(project.project_stack),
  max_members: xss(project.max_members),
  date: project.date,
});

projectRouter
  .route("/")

  .get((req, res, next) => {
    ProjectService.getAll(req.app.get("db"))
      .then((projects) => {
        res.json(projects.map(serializeProjects));
      })
      .catch(next);
  })

  .post(jsonParser, (req, res, next) => {
    const {
      max_members,
      project_name,
      project_desc,
      project_status,
      project_stack,
      client_name,
      client_company,
      client_phone,
      client_email,
    } = req.body;

    const newProject = {
      project_name,
      project_status,
    };

    const numberOfValues = Object.values(newProject).filter(Boolean).length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    newProject.client_name = client_name;
    newProject.client_company = client_company;
    newProject.client_phone = client_phone;
    newProject.client_email = client_email;
    newProject.project_desc = project_desc;
    newProject.project_stack = project_stack;
    newProject.max_members = max_members;

    ProjectService.insertProject(req.app.get("db"), newProject)
      .then((project) => {
        logger.info(`Project with id ${project.project_id} created.`);
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${project.project_id}`))
          .json(serializeProjects(project));
      })
      .catch(next);
  });

projectRouter
  .route("/:project_id")

  .all((req, res, next) => {
    ProjectService.getById(req.app.get("db"), req.params.project_id)
      .then((project) => {
        if (!project) {
          return res.status(404).json({
            error: { message: "Project Not Found" },
          });
        }
        res.project = project;
        next();
      })
      .catch();
  })

  .get((req, res) => {
    res.json(serializeProjects(res.project));
  })

  .delete((req, res, next) => {
    ProjectService.deleteProject(req.app.get("db"), req.params.project_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })

  .patch(jsonParser, (req, res, next) => {
    const {
      max_members,
      project_name,
      project_desc,
      project_status,
      project_stack,
      client_name,
      client_company,
      client_phone,
      client_email,
    } = req.body;

    const projectToUpdate = {
      project_name,
      project_status,
    };

    const numberOfValues = Object.values(projectToUpdate).filter(Boolean)
      .length;
    if (numberOfValues === 0) {
      return res.status(400).json({
        error: {
          message: `Need all required fields`,
        },
      });
    }

    projectToUpdate.client_name = client_name;
    projectToUpdate.client_company = client_company;
    projectToUpdate.client_phone = client_phone;
    projectToUpdate.client_email = client_email;
    projectToUpdate.project_desc = project_desc;
    projectToUpdate.project_stack = project_stack;
    projectToUpdate.max_members = max_members;

    ProjectService.updateProject(
      req.app.get("db"),
      req.params.project_id,
      projectToUpdate
    )
      .then((numRowsAffected) => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = projectRouter;
