import Dice from './../src/js/rolldice.js';

describe('Dice', () => {

   test('should create an object with a number, totalScore, roundScore, and id', () => {
    const dice = new Dice (0, 0, 0, 1);
    expect(dice.number).toEqual(0);
    expect(dice.totalScore).toEqual(0);
    expect(dice.roundScore).toEqual(0);
    expect(dice.id).toEqual(1);
   });
  
  test('should roll random number between  1 and 6', () => {
    const dice = new Dice();
    dice.Roll();
    expect(dice.number).toBeLessThanOrEqual(6);
    expect(dice.number).toBeGreaterThanOrEqual(1);
  });

// Dice.prototype.PlayRound = function() {
//     if (this.number !== 1) {
//         this.roundScore += this.number;
//     } if (this.number === 1) {
//         this.roundScore = 0;
//     }
//     return this.roundScore;
// }

});