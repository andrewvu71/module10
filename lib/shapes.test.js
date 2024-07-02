const { Circle, Triangle, Square } = require('./shapes');

describe('Shape Classes', () => {
    it('renders Circle SVG correctly', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
    });

    it('renders Triangle SVG correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toBe('<polygon points="150,50 100,150 200,150" fill="blue" />');
    });

    it('renders Square SVG correctly', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="green" />');
    });
});
