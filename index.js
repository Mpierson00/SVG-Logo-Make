const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'What text do you want on the logo (up to 3 characters)?',
      validate: input => input.length <= 3 || 'Text can only be up to 3 characters.',  
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be?',
    },
];