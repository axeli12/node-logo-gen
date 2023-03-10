const Shape = require('../lib/triangle');

const triangle = new Shape('triangle', 'pink','MOB', 'black');

describe('triangle'), () => {
    describe('Prop of Circle', () => {
        test('Test shape prop', () => {
            expect(triangle.shape).toEqual('triangle')
        })
        test('Test shapeBg', () => {
            expect(triangle.shapeBg).toEqual('pink')
        })
        test('Test text', () => {
            expect(triangle.text).toEqual('MOB')
        })
        test('Test textColor', () => {
            expect(triangle.textColor).toEqual('black')
        })
    })
}