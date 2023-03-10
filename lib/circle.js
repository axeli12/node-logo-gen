const Shapes = require('./newShape') 

class Circle extends Shapes {
    constructor(text, textColor, shapeBg) {
        super(text, textColor, shapeBg)
    }
    render() {
        return `<svg version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeBg}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}
module.exports = Circle;