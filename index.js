// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Brief description of project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Choose a license:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address:'
    },
];

function beginInquiry(){
    inquirer
        .prompt(questions)
        .then(writeToFile(data));
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`generated/README.md`, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    beginInquiry();
}

// Function call to initialize app
init();
