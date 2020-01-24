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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }
  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }
  vikingAttack() {
    let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randViki = Math.floor(Math.random() * this.vikingArmy.length);

    let attackDamage = this.saxonArmy[randSaxon].receiveDamage(this.vikingArmy[randViki].strength);
    if (this.saxonArmy[randSaxon].health <= 0) {
      this.saxonArmy.splice(randSaxon, 1);
    }
    return attackDamage;
  }

  saxonAttack() {
    let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randViki = Math.floor(Math.random() * this.vikingArmy.length);

    let attackDamage = this.vikingArmy[randViki].receiveDamage(this.saxonArmy[randSaxon].strength);
    if (this.vikingArmy[randViki].health <= 0) {
      this.vikingArmy.splice(randViki, 1);
    }
    return attackDamage;
  }
  showStatus() {
    if (this.saxonArmy.length === this.vikingArmy.length)
      return 'Vikings and Saxons are still in the thick of battle.';
    else if (this.saxonArmy.length <= 0) return 'Vikings have won the war of the century!';
    else if (this.vikingArmy.length <= 0)
      return 'Saxons have fought for their lives and survived another day...';
  }
}
