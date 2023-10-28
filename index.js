// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // Logs inputs from prompts that are shown in the terminal.
const fs = require("fs"); // Module that allows the code to write the READFILE.md within the computer file system.
const shapes = require("./lib/shapes"); // Functions that builds out the code for the README file. 

// The prompts that appear in the terminal.
const logoTraits = [
    {
        type: "input",
        message: "Input Upto Three Characters: ",
        name: "logoCharacters",
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
        message: "Select Color of Logo: ",
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

// Function to write README file.
function writeToFile(file, data) {
    fs.writeFile(file, data, (err) =>
        err ? console.log(err) : console.log("Logo generated.")
    );
}

// Function to initialize program.
function init() {
    inquirer.prompt(logoTraits).then((data) => {
        writeToFile("logo.svg", shapes(data));
    });
}

// Function call to initialize app.
init();