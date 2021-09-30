const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

inquirer
     .prompt(
          [
               {
                    name: 'title',
                    type: 'input',
                    message: ''
               }
          ]
     )