const inquirer = require('inquirer');
const fs = require('fs/promises');
const { Circle, Square, Triangle } = require('./lib/shapes');

const shapeClasses = { Circle, Square, Triangle };

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
        choices: Object.keys(shapeClasses),
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the shape to be?',
    },
];

const generateLogo = async () => {
    try {
      const answers = await inquirer.prompt(questions);
      const { text, textColor, shape, shapeColor } = answers;
  
      const ShapeClass = shapeClasses[shape];
      const shapeInstance = new ShapeClass(shapeColor);
  
      const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shapeInstance.render()}
          <text x="150" y="125" font-family="Verdana" font-size="35" fill="${textColor}" text-anchor="middle">${text}</text>
        </svg>`;
  
      await fs.writeFile(`./examples/logo.svg`, svgContent.trim());
      console.log('Generated logo.svg in the examples folder.');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  generateLogo();
