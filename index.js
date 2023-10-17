
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown'); 

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a project description:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'list', 
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Other'], 
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];


function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  console.log(`${fileName} has been generated successfully.`);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers); 
    writeToFile('README.md', readmeContent);
  });
}

init(); 
