const validator = require("email-validator");
const regex = /[@]/;

// Validate form fields
const validateUserName = (name) => {
  if (name.length === 0) {
    return { error: true, message: "Name is required" };
  }

  return { error: false, message: "" };
};

const validateGithub = (github) => {
  if (github.length === 0) {
    return { error: true, message: "Github Handle is required" };
  }

  return { error: false, message: "" };
};

const validateEmail = (email) => {
  if (!validator.validate(email)) {
    return {
      error: true,
      message: "Please enter a valid email address",
    };
  }

  return { error: false, message: "" };
};

const validateEmailOrSlack = (input) => {
  if (input.length === 0) {
    return {
      error: true,
      message: "Please enter a valid email address or Slack Handle",
    };
  } else {
    if (input.match(regex)) {
      if (!validator.validate(input)) {
        return {
          error: true,
          message: "Please enter a valid email address",
        };
      }
    }
  }

  return { error: false, message: "" };
};

const validateSelectedProjects = (selectedProjects) => {
  const count = Object.values(selectedProjects).filter((k) => k.checked);

  if (Object.keys(selectedProjects).length === 0 || count.length === 0) {
    return {
      error: true,
      message: "Please select at least 1 Project to signup for",
    };
  }

  if (count.length > 2) {
    return {
      error: true,
      message: "Please select a maximum of 2 projects",
    };
  }

  return { error: false, message: "" };
};

module.exports = {
  validateEmail,
  validateGithub,
  validateSelectedProjects,
  validateUserName,
  validateEmailOrSlack,
};
