// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

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
        type: 'checkbox',
        name: 'license',
        message: 'which license?',
        choices: ["MIT", "option2", "option3"],
      },
    ]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => writeToFile('test.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote test.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
