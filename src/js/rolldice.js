// Business Logic


export default function Dice(number, totalScore, roundScore, id) {
    this.number = 0;
    this.totalScore = 0;
    this.roundScore = 0;
    this.id = id;
  }

Dice.prototype.Roll = function() {
    this.number = Math.ceil(Math.random()*6);
};

Dice.prototype.PlayRound = function() {
    if (this.number !== 1) {
        this.roundScore += this.number;
    } if (this.number === 1) {
        this.roundScore = 0;
    }
    return this.roundScore;
};

Dice.prototype.TotalRound = function() {
      this.totalScore += this.roundScore;
      this.roundScore = 0;
};