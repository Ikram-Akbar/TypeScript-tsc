
class Animal {
    name: string;
    species: string;
    constructor(name:string, species:string) {
        this.name = name;
        this.species = species;
    }

    makeSound():string {
        return `${this.name} makes a sound.`;
    }
}

const dog:Animal = new Animal("Buddy", "Dog");
console.log(dog.makeSound());
