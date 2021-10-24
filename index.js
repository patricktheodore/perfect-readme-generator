const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

const fileName = 'README.md'

const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitUser',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the name of your repository?',
        name: 'repoTitle',
    },
    {
        type: 'input',
        message: 'Please provide a link to the application/repository.',
        name: 'remoteRepo',
    },
    {
        type: 'input',
        message: 'Please provide a brief summary of your application/repository (max 1 or 2 lines).',
        name: 'briefDescription',
    },
    {
        type: 'input',
        message: 'Please provide a more in depth description of the project.',
        name: 'detailedDescription',
    },
    {
        type: 'input',
        message: 'What technologies/languages did you use to build your project?',
        name: 'builtWith',
    },
    {
        type: 'input',
        message: 'Please provide any prerequisites for the application.',
        name: 'prerequisites',
    },
    {
        type: 'input',
        message: 'Please provide detailed installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide detailed usage instructions.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select the license that applies to your application/repository',
        choices: [
            'Apache license 2.0',
            'Do What The F*ck You Want To Public License',
            'GNU General Public License v3.0',
            'BSD 3-clause License',
            'MIT',
            'Mozilla Public License 2.0'],
        name: 'license',
        default: 'MIT',
    },
    {
        type: 'confirm',
        message: 'Would you like to include details on how other devs can contribute?',
        name: 'contribution',
        default: true,
    },
    {
        type: 'input',
        message: 'Please provied details on any tests for your application.',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Please select the best ways to contact you:',
        choices: [
            'email',
            ' phone',
            ' github',
            ' social-media'
        ],
        name: 'contact',
        default: 'email'
    },
    {
        type: 'input',
        message: 'If you wish to provide any acknowledgments, please do so here.',
        name: 'acknowledgments',
    },
];

function generateReadme() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
            writeToFile(fileName, data);
            return data
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log('error!')
            } else {
                console.log('success!')
            }
        });
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function init() {
    generateReadme();
}

init();

