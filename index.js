// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
//
const generateMarkdown = require("./utils/generatemarkdown.js");
console.log("Welcome to my README generator");
console.log("Please answer the following questions");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  // promptin to enter name of your project
  {
    type: "input",
    name: "title",
    message: "what is the title of this project?",
    validate: (title_input) => {
      if (title_input) {
        return true; //let it continue else re-prompt message
      } else {
        console.log("enter a title to continue");
        return false;
      }
    },
  },
  // enter project description
  {
    type: "input",
    name: "description",
    message: "What is the description of this project?",
    validate: (description_input) => {
      if (description_input) {
        return true;
      } else {
        console.log("Please enter a description to continue");
        return false;
      }
    },
  },
  // installation instructions
  {
    type: "input",
    name: "installation",
    message: "What are the instructions for the installation of the project?",
    validate: (installation_input) => {
      if (installation_input) {
        return true;
      } else {
        console.log("Please enter the installation steps to continue");
        return false;
      }
    },
  },

  // usage
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
    validate: (usage_input) => {
      if (usage_input) {
        return true;
      } else {
        console.log("How do you use this project");
        return false;
      }
    },
  },
  // license
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license that best suits your project?",
    choices: ["MPL 2.0", "GNU", "Apche", "MIT", "None of the Above"],
    validate: (license_input) => {
      if (license_input) {
        return true;
      } else {
        console.log("Select a license");
        return false;
      }
    },
  },
  //contributing
  {
    type: "input",
    name: "contribution",
    message: "How can the user contribute to this project?",
    validate: (contribution_input) => {
      if (contribution_input) {
        return true;
      } else {
        console.log("How can someone contribute to your project");
        return false;
      }
    },
  },

  // Test instructions
  {
    type: "input",
    name: "test",
    message: "How can a user test this project?",
    validate: (test_input) => {
      if (test_input) {
        return true;
      } else {
        console.log("How can we test this protect?");
        return false;
      }
    },
  },
  // Question to Enter git username
  {
    type: "input",
    name: "github",
    message: "Please enter your github username (required)",
    validate: (github_input) => {
      if (github_input) {
        return true;
      } else {
        console.log("Please enter your github username");
        return false;
      }
    },
  },
  // Question to enter email address
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
    validate: (email_input) => {
      if (email_input) {
        return true;
      } else {
        console.log("Please enter your email address");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(
      "Congratulations! The README.md file  has been created and is ready to be viewed!!!"
    );
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
