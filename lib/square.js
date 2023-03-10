const Shapes = require('./shape');

class Square extends Shapes {
    constructor(text, textColor, shapeBg) {
        super(text, textColor, shapeBg)
    }
    render() {
        return `<svg version="1.1" width="300" height="200">
        <rect x="100" y="20" width="150" height="150" fill="${this.shapeBg}"/>
        <text x="175" y="110" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}
module.exports = Square;