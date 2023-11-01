// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // Logs inputs from prompts that are shown in the terminal.
const fs = require("fs"); // Module that allows the code to write the READFILE.md within the computer file system.

const Circle = require("./lib/circle")
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")

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
        err ? console.log(err) : console.log("Generated logo.svg")
    );
}

// Function to initialize program.
function init() {
    inquirer.prompt(logoTraits).then((data) => {
    switch (data.logoShape) {
        case "Circle":
            return writeToFile("./examples/logo.svg", new Circle(data.logoColor, data.characterColor, data.logoCharacters).render());
        case "Triangle":
            return writeToFile("./examples/logo.svg", new Triangle(data.logoColor, data.characterColor, data.logoCharacters).render());
        case "Square":
            return writeToFile("./examples/logo.svg", new Square(data.logoColor, data.characterColor, data.logoCharacters).render());
        }
    });
}

// Function call to initialize app.
init();