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
    validate: validateInput,
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
  },
];

// Function for markdown license badges

function getLicense(value) {
  if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  }
}

function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question with some kind on input.";
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      writeToFile("README.md", responses);
    });
  }

// Function call to initialize app
init();
