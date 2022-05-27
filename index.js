// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter Description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contributing Helpers',
        name: 'helpers',
    },
    {
        type: 'input',
        message: 'Tests Application',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select License',
        name: 'license',
        choices: ["MIT License", "License 2", "License 3"]
    },
    {
        type: 'input',
        message: 'What is your GitHub Username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email',
        name: 'email',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const template = generateMarkdown(data)
    fs.writeFile(fileName, template);
    // write to file input (fileName, template)
    console.log(template)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {

        writeToFile("README.md", answers)
    })
}

// Function call to initialize app
init();

