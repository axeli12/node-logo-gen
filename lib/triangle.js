const Shapes = require('./shape');

class Triangle extends Shapes {
    constructor(text, textColor, shapeBg) {
        super(text, textColor, shapeBg)
    }
    render() {
        return `<svg version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeBg}"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}
module.exports = Triangle;