const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const axios = require('axios');

const fileName = 'README.md'

const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'gitUser',
        validate: function (userInput) {
            return axios.get(`https://api.github.com/users/${userInput}`)
                .then(res => {
                    return true
                })
                .catch(err => {
                    return ('please enter a valid github username account');
                });
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function (userInput) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(userInput).toLowerCase())) {
                return true
            } else {
                return ('Please enter a valid email!');
            };
        }
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
        validate: function (userInput, answers) {
            return axios.get(`https://api.github.com/repos/${answers.gitUser}/${userInput}`)
                .then(res => {
                    return true
                })
                .catch(err => {
                    return ('please enter a valid github repository.');
                })
        }
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
        type: 'checkbox',
        message: 'Which Languages did you use to build this application? (Select all applicable).',
        choices: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Markdown',
            'PHP',
            'Python',
            'Ruby',
            'Rust',
            'TypeScript'
        ],
        name: 'languages',
        default: 'Markdown'
    },
    {
        type: 'checkbox',
        message: 'Which Frameworks/Platforms/Libraries did you use to build this application? (Select all applicable).',
        choices: [
            'Angular.js',
            'Bootstrap',
            'Express.js',
            'FontAwesome',
            'Flutter',
            'Google Fonts',
            'Insomnia',
            'jQuery',
            'NPM',
            'Next JS',
            'Node.js',
            'Rails',
            'React',
            'React Native',
            'SASS',
            'SweetAlert',
            'Svelte',
            'TailwindCSS',
            'Vue.js'
        ],
        name: 'frameworks',
        default: 'NPM'
    },
    {
        type: 'checkbox',
        message: 'Which Design Applications did you use to build this application? (Select all applicable).',
        choices: [
            'Adobe After Effects',
            'Adobe Fonts',
            'Adobe Illustrator',
            'Adobe InDesign',
            'Adobe Photoshop',
            'Blender',
            'Canva',
            'Dribble',
            'Figma'
        ],
        name: 'designs',
        default: 'Adobe Fonts'
    },
    {
        type: 'checkbox',
        message: 'Which Code Editor Did you use? (Select all applicable).',
        choices: [
            'CodePen',
            'Visual Studio Code',
            'Xcode'
        ],
        name: 'editors',
        default: 'Visual Studio Code'
    },
    {
        type: 'checkbox',
        message: 'Select any other tools you used in production',
        choices: [
            'Airtable',
            'AWS',
            'Azure',
            'Dropbox',
            'ESLint',
            'Git',
            'GitHub',
            'GitLab',
            'Google Drive',
            'Heroku',
            'MDN Web Docs',
            'MongoDB',
            'Postman',
            'Sequelize',
            'Stack Overflow',
            'Trello'

        ],
        name: 'tools',
        default: 'GitHub'
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
            console.log(data);
            writeToFile(fileName, data);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log('error!')
            } else {
                console.log('success!')
            }
        });
}

function generateRemoteRepoUrl(gitUser, repoTitle) {
    return (`https://github.com/${gitUser}/${repoTitle}`)
}

function writeToFile(fileName, data) {

    data.remoteRepo = generateRemoteRepoUrl(data.gitUser, data.repoTitle);

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function init() {
    generateReadme();
}

init();

