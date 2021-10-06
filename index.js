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
                    choices: ['CC0_1.0', 'CC_BY_4.0', 'CC_BY-SA_4.0', 'CC_BY-NC_4.0', 'CC_BY-NC-SA 4.0']
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
# ${response.title}
![License Badge](./images/${response.license}.svg)
## **Table of Contents**
* [description](#description)
* [installation instruction](#installation-instruction)
* [usage](#usage)
* [contribution](#contribution)
* [test](#test)
* [questions](#questions)

## **description**
${response.description}

## **installation instruction**
${response.instruction}

## **usage**
${response.usage}

## **contribution**
${response.contribution}

## **test**
${response.test}

## **questions**
my GitHub: [${response.github}](https://${response.link})
my E-mail: ${response.email}
          `, 
          (err) => err? console.error(error):console.log('Success!'))
     })