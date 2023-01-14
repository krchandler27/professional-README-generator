const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter your installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your usage information:"
    },
    {
        type: "input",
        name: "contributions",
        message: "Enter your contribution guidelines:"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Enter your test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Select license(s), if any:",
        choices: [
            "MIT",
            "Microsoft Public License",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your github username:"
    },
    {
        type: "input",
        name: "deployedLink",
        message: "Enter the link to your deployed project:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((answers) => {
            console.log(answers)
            // writeToFile("README.md", answers)
        })
}

// Function call to initialize app
init();
