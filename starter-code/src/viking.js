// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }

    getHealth (){
        return this.health;
    }

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage (damage){
        this.health -= damage;
        return(this.health > 0) ? `${this.name} has received ${damage} points of damage` :
        `${this.name} has died in act of combat`;
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage (damage) {
        this.health -= damage;
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` :
        `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking (viking){
        this.vikingArmy.push(viking);
    }

    addSaxon (saxon){
        this.saxonArmy.push(saxon);
    }

    randViking () {
        let randViking = Math.floor(Math.random() * this.vikingArmy.length);
        return this.vikingArmy[randViking];
    }

    randSaxon (){
        let randSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        return this.saxonArmy[randSaxon];
    }

    vikingAttack (){
        let saxon = this.randSaxon();
        let result = saxon.receiveDamage(this.randViking().attack());
        if(saxon.getHealth() <= 0) {
            let index = this.saxonArmy.indexOf(saxon);
            this.saxonArmy.splice(index, 1);
        }
        return result;
    }

    saxonAttack (){
        let viking = this.randViking();
        let result = viking.receiveDamage(this.randSaxon().attack());
        if(viking.getHealth() <= 0) {
            let index = this.vikingArmy.indexOf(viking);
            this.vikingArmy.splice(index, 1);
        }
        return result;
    }

    showStatus (){
        if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        else if(this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";
        else return "Vikings and Saxons are still in the thick of battle.";
    }

}
