const Circle = require("./lib/circle")
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")

describe('Circle', () => {
    it('It should make a red circle', () => {
        const shape = new Circle();
        shape.setColor("Red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="Red" />');
    });
});

describe('Square', () => {
    it('It should make a yellow square', () => {
        const shape = new Square();
        shape.setColor("Yellow");
        expect(shape.render()).toEqual('<rect x="75" y="25" width="150" height="150" fill="Yellow" />');
    });
});

describe('Triangle', () => {
    it('It should make a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("Blue");
        expect(shape.render()).toEqual('<polygon points="150,0 50,200 250,200" fill="Blue" />');
    });
});
