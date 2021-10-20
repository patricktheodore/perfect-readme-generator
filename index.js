// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

const fileName = 'README.md'


// TODO: Create an array of questions for user input
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
        message: 'What is the title of your application/repository?',
        name: 'title',
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
        type: 'input',
        message: 'Please provide details on how other devs can contribute.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provied details on any tests for your application.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please provied details on how best to contact you.',
        name: 'contact',
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
            // console.log(data)
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






//to do

//file name will be README.md

// application will be involed by using the following command - node index.js

//command-line application, 
//inquirer - prompts for information about application repo
//high quality readme is generated

//inlcudes - title, description, table of contents, installation, usage, license, contributing, tests and questions. 

//project title = title of readme
//description, installation instructions, usage information, contribution, guidelines and test instructions = all have own sections
//a choice of licenses is available in a list
//a badge for that license is added near the top of the readme. a notice is added the license sections that explains which license thte applications is covered under
//github username, added to questions section, with  a link to github profile
//email address, added to questions sections with instructions on how to reach me with additional questions
//working table of contents. 

//licenses https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#disclaimer
