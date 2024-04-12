import inquirer from 'inquirer';
import fs from 'fs/promises';
import { Circle, Square, Triangle } from './lib/shapes.js';

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

      const timestamp = new Date().getTime();
      const filename = `logo_${timestamp}.svg`;
  
      const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shapeInstance.render()}
          <text x="150" y="125" font-family="Verdana" font-size="35" fill="${textColor}" text-anchor="middle">${text}</text>
        </svg>`;
  
      await fs.writeFile(`./examples/${filename}`, svgContent.trim());
      console.log(`Generated ${filename} in the examples folder.`);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  generateLogo();
