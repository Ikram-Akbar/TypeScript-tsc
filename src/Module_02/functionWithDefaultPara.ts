
/* type MyFuncType = (name: string, greeting?: string) => string;

const greeter: MyFuncType = (name, greeting = "Hello") => {
    return `${greeting}, ${name}!`;
}; */

function greet(name:string, greeting:string = "Hello"):string {
    return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));
