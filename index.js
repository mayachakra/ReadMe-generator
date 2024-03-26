// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter the title for your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How can one use this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter any credits such as naming other contributors or tools you used:",
        name: "credits"
    },
    {
        type: "input",
        message: "Please describe features your project has:",
        name: "features"
    },
    {
        type: "list",
        message: "What type of license did you use",
        name: "license",
        choices:[
            {name:"MIT License", value:"MIT"},
            {name:"Apache License 2.0", value:"Apache-2.0"},
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const{title, description, installation, usage, credits, features, license} = answers;
            const markdown = generateMarkdown({title, description, installation, usage, credits, features, license});
            writeToFile('README.md', markdown);
            console.log('README.md file generated!')

        })
        .catch((error) =>{
            console.error("Error: ", error);
        });
}

// Function call to initialize app
init();
