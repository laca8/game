class Person {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.attackBtn = document.querySelector(`#${this.name}-attack`);
    this.healthBtn = document.querySelector(`#${this.name}-health`);
    this.progress = document.querySelector(`.${this.name}-progress`);
    this.alive = document.querySelector(`.${this.name}-alive`);
  }
  attack(opponent) {
    if (opponent.health > 0) {
      opponent.health -= this.strength;
      opponent.progress.style.width = `${opponent.health}%`;
      console.log(opponent.health);
    } else {
      opponent.attackBtn.remove();
      opponent.healthBtn.remove();
      opponent.alive.innerHTML = `${opponent.name} went to hell`;
      this.attackBtn.remove();
      this.healthBtn.remove();
      this.alive.innerHTML = `${this.name} win....`;
    }
  }
  addHealth() {
    if (this.health < 100) {
      this.health += 5;
      this.progress.style.width = `${this.health}%`;
    }

    if (this.health > 100) {
      this.health = 100;
    }
    if (this.health < 0) {
      this.health = 0;
    }
    console.log(this.health);
  }
  status() {
    console.log(`name: ${this.name}`);
    console.log(`strength: ${this.strength}`);
    console.log(`health: ${this.health}`);
  }
}
let narto = new Person("narto", 10, 100);
let sasaki = new Person("sasaki", 10, 100);
console.log(sasaki);
//attack
narto.attackBtn.addEventListener("click", () => {
  narto.attack(sasaki);
});
sasaki.attackBtn.addEventListener("click", () => {
  sasaki.attack(narto);
});
//health
narto.healthBtn.addEventListener("click", () => {
  narto.addHealth();
});
sasaki.healthBtn.addEventListener("click", () => {
  sasaki.addHealth();
});
