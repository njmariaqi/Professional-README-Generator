const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

inquirer
     .prompt(
          [
               {
                    name: 'title',
                    type: 'input',
                    message: 'What is the title of your project?'
               },
               {
                    name: 'description',
                    type: 'input',
                    message: 'What is the description of your project?'
               },
               {
                    name: 'instruction',
                    type: 'input',
                    message: 'What is the installation instruction of your project?'
               },
               {
                    name: 'usage',
                    type: 'input',
                    message: 'What is the usage of your project?'
               },
               {
                    name: 'contribution',
                    type: 'input',
                    message: 'What is the contribution guidelines of your project?'
               },
               {
                    name: 'test',
                    type: 'input',
                    message: 'What is the test instruction of your project?'
               },
               {
                    name: 'license',
                    type: 'checkbox',
                    message: 'What is the license of your project?',
                    choices: ['CC0 1.0', 'CC By 4.0', 'CC BY-SA 4.0', 'CC BY-NC 4.0', 'CC BY-NC-SA 4.0']
               },
               {
                    name: 'github',
                    type: 'input',
                    message: 'What is the your github name?'
               },
               {
                    name: 'link',
                    type: 'input',
                    message: 'What is the your github link?'
               },
               {
                    name: 'email',
                    type: 'input',
                    message: 'What is the your email?'
               },
          ]
     )
     .then(function(response) {
          fs.writeFile('ReadMe.md',
          `
          
          `, 
          (err) => err? console.error(error):console.log('Success!'))
     })