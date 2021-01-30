require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const errorHandler = require("./error-handler");
const projectRouter = require("./project/project-router");
const signupRouter = require("./signup/signup-router");
const voteRouter = require("./vote/vote-router");
const adminRouter = require('./admin/admin-router');

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "dev";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use("/api/projects", projectRouter);
app.use("/api/signup", signupRouter);
app.use("/api/vote", voteRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.json({ ok: true });
});

/* Error handling */
app.use(errorHandler);

module.exports = app;
