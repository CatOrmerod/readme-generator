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
            message: 'Enter a brief description of your project',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter any installation instructions for your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Are there any other contributors to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Are tests required?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'which license?',
            choices: ["mit", "gpl-3.0", "apache-2.0"],
        },
    ]);
};

// TODO: Create a function to initialize app
const init = () => {
    questions()
        // TODO: Create a function to write README file
        // function writeToFile(fileName, data) {}
        .then(function (answers) {
            const queryUrl = `https://api.github.com/licenses/${answers.license}`;
            console.log(answers);
            axios.get(queryUrl).then(function (res) {
                
                const licenseInfo = {
                    licKey: res.data.key,
                    licName: res.data.name,
                    licURL: res.data.html_url,
                    licBody: res.data.body,
                };
                writeToFile('test.md', generateMarkdown({...answers, ...licenseInfo}))
                    .then(() => console.log('Successfully wrote test.md'))
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
};


// Function call to initialize app
init();
