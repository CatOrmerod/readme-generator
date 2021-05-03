// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const axios = require("axios");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./src/generateMarkdown');

const writeToFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a brief description of your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter any installation instructions for your project:',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project:',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please outline any contribution guidelines to be followed:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are tests required?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to apply to your project? (first option blank if no license required)',
            choices: ["", "mit", "gpl-3.0", "apache-2.0", "mpl-2.0", "bsd-2-clause"],
        },
        {
            type: 'input',
            name: 'user',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address:',
            validate: function (email) {
                if (email.includes('@')) { return true };
                return 'Please enter a valid email address';
            }
        },
    ]);
};

//api query to return the license info should the answer not be empty
function fetchLicense(license) {
    const queryUrl = `https://api.github.com/licenses/${license}`;
    return axios.get(queryUrl)
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
        //function to bring through the license details
        .then(async function (answers) {
            console.log(answers);
            let licenseInfo ={}
            if (answers.license) { 
                const res = await Promise.resolve (fetchLicense(answers.license))
                licenseInfo = {
                    licKey: res.data.key,
                    licName: res.data.name,
                    licURL: res.data.html_url,
                    licBody: res.data.body,
                };
            }
            console.log(licenseInfo)
            // TODO: Create a function to write README file
            // function writeToFile(fileName, data) {}
            writeToFile('output/README.md', generateMarkdown({ ...answers, ...licenseInfo }))
                .then(() => console.log('Successfully wrote README.md'))
                .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();