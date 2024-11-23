{

    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound(): string {
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

    const calling = (animal: Animal) => {
        if (animal instanceof Cat) {
            console.log(animal.meow());
        } else if (animal instanceof Dog) {
            console.log(animal.bark());
        } else {
            console.log(animal.makeSound());
        }
    };

    const cat = new Cat("Whiskers", "Cat");
    const dog = new Dog("Shepard", "Dog");
    calling(cat); // Output: Whiskers meows softly.
    calling(dog); // Output: Zingu barks loudly.











}