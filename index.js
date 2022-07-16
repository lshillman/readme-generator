const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = require('./utils/licenses');
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
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ["none", ...licenses.getLicenseChoices()]
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
        .then((answers) => {
            writeToFile(answers);
          });
}

function writeToFile(data) {
    fs.writeFile(`generated/README.md`, generateMarkdown(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!'))
}

function init() {
    beginInquiry();
}

init();
