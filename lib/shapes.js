// Define a base Shape class
class Shape {
    constructor(color = 'black') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // This should be overridden by specific shape classes
        return '';
    }
}

// Extend Shape class for specific shapes
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
