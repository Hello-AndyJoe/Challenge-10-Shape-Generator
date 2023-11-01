const Circle = require("./circle.js")
const Triangle = require("./triangle.js")
const Square = require("./square.js")

describe('Circle', () => {
    it('It should make a red circle', () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});

describe('Square', () => {
    it('It should make a yellow square', () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="yellow" />');
    });
});

describe('Triangle', () => {
    it('It should make a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,0 50,200 250,200" fill="blue" />');
    });
});
