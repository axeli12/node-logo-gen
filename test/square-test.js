const Shape = require('../lib/square');

const square = new Shape('square', 'blue','POL', 'gery');

describe('square'), () => {
    describe('Prop of Circle', () => {
        test('Test shape prop', () => {
            expect(square.shape).toEqual('square')
        })
        test('Test shapeBg', () => {
            expect(square.shapeBg).toEqual('blue')
        })
        test('Test text', () => {
            expect(square.text).toEqual('POL')
        })
        test('Test textColor', () => {
            expect(square.textColor).toEqual('gery')
        })
    })
}