import Dice from './../src/js/rolldice.js';

describe('Dice', () => {

   test('should create an object with a number, totalScore, roundScore, and id', () => {
    const dice = new Dice (2, 2, 2, 1);
    expect(dice.number).toEqual(2);
    expect(dice.totalScore).toEqual(2);
    expect(dice.roundScore).toEqual(2);
    expect(dice.id).toEqual(1);
   });

  });