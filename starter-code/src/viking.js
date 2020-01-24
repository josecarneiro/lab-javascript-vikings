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
  constructor(object) {
    addViking(object) {

      this.vikingArmy.push(object);
      this.vikingArmy = [];
    }
  };
  constructor(object) {
    addSaxon(object) {
      army = saxonArmy.push(object);
      this.saxonArmy = [];
    }
  };

  vikingAttack() {
    ataque = Saxon.receiveDamage(Viking.strength);
    if (ataque === "A Saxon has died in combat") {
      return saxonArmy.pop()
    }
  };
  saxonAttack() {
    ataque === Viking.receiveDamage(Saxon.strength);
    if (ataque === `${name.Viking} has died in act of combat`) {
      return vikingArmy.pop()
    }

  };
  showStatus() { };

};



/*class Car extends Vehicle {
  constructor (brand, engineSize, year) {
    super(brand, year, 4);
    this.engineSize = engineSize;
  }
*/