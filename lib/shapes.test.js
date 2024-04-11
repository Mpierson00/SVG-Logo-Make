const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
    test('Circle renders correctly', () => {
        const circle = new Circle('red');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
    });
    
});