// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

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
      "Please write a brief explanation of how users can test the application/project",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "MIT",
      "Apache 2.0",
      "Mozilla",
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU LGPLv3",
    ],
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('README.md has been generated!');
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    const readmeContent = generateMarkdown(data);
    writeToFile("README.md", readmeContent);
  });
}

// Function call to initialize app
init();
