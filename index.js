// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Project Installation?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'For Questions github user',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Project Contributions?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Project Tests?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License Type?',
        choices:['MIT','GNUPLv3.0','CCZero']
    },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const answers = generateMarkdown(data)
        fs.writeFile('./readmefiles/README.md', answers, function (err){
            if (err) {
                console.log("couldn't save file")
            } else {
                console.log("README.md file created in the readmefiles folder")
            }
            })
        } ) 
        }

// Function call to initialize app
init();
