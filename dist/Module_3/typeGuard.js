"use strict";
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            return `${this.name} makes a sound.`;
        }
    }
    class Dog extends Animal {
        bark() {
            return `${this.name} barks loudly.`;
        }
    }
    class Cat extends Animal {
        meow() {
            return `${this.name} meows softly.`;
        }
    }
    const calling = (animal) => {
        if (animal instanceof Cat) {
            console.log(animal.meow());
        }
        else if (animal instanceof Dog) {
            console.log(animal.bark());
        }
        else {
            console.log(animal.makeSound());
        }
    };
    const cat = new Animal("Whiskers", "Cat");
    const dog = new Animal("Zingu", "Dog");
    calling(dog);
}
