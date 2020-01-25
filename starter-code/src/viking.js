// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
};

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (damage < this.health) {
      return (`${this.name} has received ${damage} points of damage`)
    } else {
      return (`${this.name} has died in act of combat`);
    }
  }
  battleCry() {
    return "Odin Owns You All!"

  }
}
// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (damage < this.health) {
      return (`A Saxon has received ${damage} points of damage`);
    } else {
      return (`A Saxon has died in combat`);
    }
  }
}


// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  };

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  };

  vikingAttack() {
    saxonIndex = saxonArmy(Math.floor(Math.random() * array.length));

    const attackResult = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[vikingIndex].attack());

    if (this.saxonArmy[saxonIndex].health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return attackResult;
  };
  saxonAttack() {
    vikingIndex = vikingArmy(Math.floor(Math.random() * array.length));
    const attackResult = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[saxonIndex].attack());

    if (this.vikingArmy[vikingIndex].health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return attackResult;
  }

  showStatus() {
  };

}
