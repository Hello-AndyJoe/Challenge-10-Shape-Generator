const Circle = require("./circle.js")
const Triangle = require("./triangle.js")
const Square = require("./square.js")

describe('Circle', () => {
    it('It should make a red circle', () => {
        const shape = new Circle("red","white","AAA") // Passes these values into the Circle class

        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AAA</text>
        </svg>`);
    });
});

describe('Square', () => {
    it('It should make a yellow square', () => {
        const shape = new Square("yellow","black","BBB");

        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="150" height="150" fill="yellow" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BBB</text>
        </svg>`);
    });
});

describe('Triangle', () => {
    it('It should make a blue triangle', () => {
        const shape = new Triangle("blue","orange","CCC");

        expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 50,200 250,200" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">CCC</text>
        </svg>`);
    });
});
