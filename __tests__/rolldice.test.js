import Dice from './../src/js/rolldice.js';

describe('Dice', () => {

   test('should create an object with a number, totalScore, roundScore, and id', () => {
    const dice = new Dice (0, 0, 0, 1);
    expect(dice.number).toEqual(0);
    expect(dice.totalScore).toEqual(0);
    expect(dice.roundScore).toEqual(0);
    expect(dice.id).toEqual(1);
   });

  });