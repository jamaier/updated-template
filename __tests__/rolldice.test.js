import Roll from './../src/js/rolldice.js';

describe('Roll', () => {
  test('generate a number', () => {
    const rolldice = new Roll(6,4);
    expect(rolldice.roll1).toEqual(6);
    expect(rolldice.roll2).toEqual(4);
  });

});
//   let rectangle;

//   beforeEach(() => {
//     rectangle = new Rectangle(3,5);
//   });

//   test('should correctly create a rectangle object using two sides', () => {
//     expect(rectangle.side1).toEqual(3);
//     expect(rectangle.side2).toEqual(5);
//   });

//   test('should correctly get the area of a rectangle object', () => {
//     expect(rectangle.getArea()).toEqual(15);
//   });
// });