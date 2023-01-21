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
        message: "Enter any additional contributors to your project:"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "Enter any test instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Select license(s), if any:",
        choices: [
            "MIT",
            "Microsoft Public License",
            "ISC", 
            "None"
        ]
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter the link to your github profile:"
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
    fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((answers) => {
            console.log(answers)
            writeToFile("exampleREADME.md", answers)
        })
}

// Function call to initialize app
init();
