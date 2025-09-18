
import { rectangleArea } from './rectangle.js';


describe('rectangleArea', () => {
  test('calculates the area of a 5x2 rectangle to be 10', () => {
    expect(rectangleArea(5, 2)).toBe(10);
  });

  test('calculates the area of a 3x3 rectangle to be 9', () => {
    expect(rectangleArea(3, 3)).toBe(9);
  });

  test('throws an error when a negative length is provided', () => {
    expect(() => rectangleArea(-5, 2)).toThrow('Length and width must be positive numbers.');
  });

  test('throws an error when a negative width is provided', () => {
    expect(() => rectangleArea(5, -2)).toThrow('Length and width must be positive numbers.');
  });
});