const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')

const questions = () => {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Please enter only three charaters"
        },
        {
            type: "input",
            name: "textColor",
            message: "Please choose what color your text will be "
        },
        {
            type: "input",
            name: "shapeBg",
            message: "Please choose what color your backgound will be"
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose what shape you want",
            choices: ["Circle", "Square", "Triangle"]
        }
    ])
}
function genShaped ({text, textColor, shapeBg, shape}) {
    let newShape;
    switch(shape) {
        case "Circle":
            newShape = new Circle(text, textColor, shapeBg);
            break;
        case "Square":
            newShape = new Square(text, textColor, shapeBg);
            break;
        default: "Triangle"
            newShape = new Triangle(text, textColor, shapeBg)
            break;

    }
    return writeFile("logo.svg", newShape.render())
}

const init = () => {
    questions()
    .then((answers) => genShaped(answers))
    .then(() => console.log("logo generated"))
    .catch((err) => console.log(err))
}
init();