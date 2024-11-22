"use strict";
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        return `${this.name} makes a sound.`;
    }
}
const dog = new Animal("Buddy", "Dog");
console.log(dog.makeSound());
