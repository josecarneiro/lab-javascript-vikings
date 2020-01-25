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
  vikingArmy = [];
  saxonArmy = [];

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    const indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const attackResult = this.saxonArmy[indexSaxon].receiveDamage(
      this.vikingArmy[indexViking].attack()
    );

    if (this.saxonArmy[indexSaxon].health <= 0) {
      this.saxonArmy.splice(indexSaxon, 1);
    }

    return attackResult;
  }

  saxonAttack() {
    const indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    const indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    const attackResult = this.vikingArmy[indexViking].receiveDamage(
      this.saxonArmy[indexSaxon].attack()
    );

    if (this.vikingArmy[indexViking].health <= 0) {
      this.vikingArmy.splice(indexViking, 1);
    }

    return attackResult;
  }
  showStatus() {
    switch (true) {
      case this.saxonArmy.length > 0 && this.vikingArmy.length > 0:
        return 'Vikings and Saxons are still in the thick of battle.';
        break;

      case this.saxonArmy.length > 0:
        return 'Saxons have fought for their lives and survived another day...';
        break;

      case this.vikingArmy.length > 0:
        return 'Vikings have won the war of the century!';
        break;
    }
  }
}
