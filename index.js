// Asynchronously load the inquirer module using dynamic import
async function loadInquirer() {
    const inquirer = await import('inquirer');
    return inquirer.default;  // Access default export from the dynamically imported module
}

// Main function to create SVG based on user input
async function createSVG() {
    const inquirer = await loadInquirer();  // Load inquirer
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 ? true : 'Please enter no more than three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (color keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the shape be?',
            default: 'blue'
        }
    ]);

    const shapes = await import('./lib/shapes.js'); // Dynamically import the shapes module
    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new shapes.Circle();
            break;
        case 'Triangle':
            shape = new shapes.Triangle();
            break;
        case 'Square':
            shape = new shapes.Square();
            break;
    }

    shape.setColor(answers.shapeColor);
    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="150" fill="${answers.textColor}" font-size="20" text-anchor="middle">${answers.text}</text>
    ${shape.render()}
</svg>
    `;

    const fs = await import('fs'); // Dynamically import the fs module
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

// Execute the main function
createSVG().catch(err => {
    console.error('Failed to create SVG:', err);
});
