# SVG Logo Maker

## Overview

The SVG Logo Maker is a Node.js application designed to generate custom SVG logos based on user input. This application serves as a tool for developers to create simple logos without the need for external graphic design software or services.

## Features

- **Customizable Logos**: Users can specify text, text color, and choose from a set of shapes (circle, square, triangle) along with their colors to create a unique logo.
- **Dynamic File Naming**: Logos are saved with unique timestamps to ensure that each file is distinct and not overwritten.
- **Logging**: Implements custom middleware to log information about HTTP requests to the server, enhancing the ability to monitor and debug the application.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v12.x or later recommended)
- npm (usually included with Node.js)

## Installation

1. Clone the repository:

   git clone https://github.com/Mpierson00/SVG-Logo-Make.git
   cd SVG-Logo-Make
   npm install

## Usage

To start the application, run the following command in the root of the project directory:

node index.js

Follow the on-screen prompts to specify the details for your SVG logo. The logo will be saved in the examples folder with a unique timestamp.

## Middleware Logging

The application uses custom middleware to log the HTTP method and path for each request to the server. This is particularly useful for understanding traffic and debugging. Logs are displayed in the console where the server is running.

## Video Walkthrough

For a detailed walkthrough of the SVG Logo Maker, including setup, usage, and features, please view the video tutorial here:
SVG Logo Maker Video Walkthrough

## Contributing

Contributions to the SVG Logo Maker are welcome! Please feel free to fork the repository, make improvements, and submit pull requests. Ensure that your changes adhere to the current coding standards and are well-documented.

## License

This project is open source and available under the MIT License.

## Contact

If you have any questions, feedback, or suggestions, please reach out to Michael Pierson via GitHub.

Thank you for using or contributing to SVG Logo Maker!