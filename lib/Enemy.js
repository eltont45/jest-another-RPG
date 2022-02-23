const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
  constructor(name = '') {
    super(name);
    
  }

  getStats() {
    return {
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }
}

Enemy.prototype = Object.create(Character.prototype);

Enemy.prototype.getDescription = function() {
  return `A ${this.name} holding a ${this.weapon} has appeared!`;
};

module.exports = Enemy;
