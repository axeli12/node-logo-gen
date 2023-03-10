const Shape = require('../lib/circle');

const circle = new Shape('circle', 'red','LoL', 'green');

describe('circle'), () => {
    describe('Prop of Circle', () => {
        test('Test shape prop', () => {
            expect(circle.shape).toEqual('circle')
        })
        test('Test shapeBg', () => {
            expect(circle.shapeBg).toEqual('red')
        })
        test('Test text', () => {
            expect(circle.text).toEqual('LoL')
        })
        test('Test textColor', () => {
            expect(circle.textColor).toEqual('green')
        })
    })
}