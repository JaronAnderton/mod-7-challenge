// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter instructions of how to install and run the program.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter instructions on how to use the program.",
  },
  {
    type: "input",
    name: "contributions",
    message: "Please explain how users can contribute to the project",
  },
  {
    type: "input",
    name: "test",
    message:
      "Please write a brief explain of how users can test the application/project",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "Apache 2.0",
      "GNU GPLv3",
      "MIT",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "Mozilla",
    ],
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    validate: validateInput,
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
