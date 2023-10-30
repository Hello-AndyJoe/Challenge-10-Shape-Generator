// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // Logs inputs from prompts that are shown in the terminal.
const fs = require("fs"); // Module that allows the code to write the READFILE.md within the computer file system.
const makeShape = require("./lib/makeShape"); // Functions that builds out the code for the README file. 

// The prompts that appear in the terminal.
const logoTraits = [
    {
        type: "input",
        message: "Input Upto Three Characters: ",
        name: "logoCharacters",
        validate: (characterInput) => {
            if (characterInput.length > 3) {
                return "No more than three characters allowed.";
            } else {
                return true;
            }
        }
    },
    {
        type: "list",
        message: "Select Color of Characters: ",
        name: "characterColor",
        choices: [
            "Red", 
            "Orange", 
            "Yellow", 
            "Green", 
            "Blue",
            "Indigo",
            "Violet",
            "White",
            "Black"
        ]
    },
    {
        type: "list",
        message: "Select Shape of Logo: ",
        name: "logoShape",
        choices: [
            "Circle", 
            "Triangle", 
            "Square"
        ]
    },
    {
        type: "list",
        message: "Select Color of Logo Shape: ",
        name: "logoColor",
        choices: [
            "Red", 
            "Orange", 
            "Yellow", 
            "Green", 
            "Blue",
            "Indigo",
            "Violet",
            "White",
            "Black"
        ]
    }
];

// Function to create logo.svg file.
function writeToFile(file, data) {
    fs.writeFile(file, data, (err) =>
        err ? console.log(err) : console.log("Logo generated.")
    );
}

// Function to initialize program.
function init() {
    inquirer.prompt(logoTraits).then((data) => {
        writeToFile("./examples/logo.svg", shapes(data));
    });
}

function shapes(data) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    <${makeShape(data.logoShape)} fill="${data.logoColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.characterColor}">${data.logoCharacters}</text>
  
    </svg>
  `;
  }

// Function call to initialize app.
init();