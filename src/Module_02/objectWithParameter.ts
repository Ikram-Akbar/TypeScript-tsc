interface PersonInterface {
    firstName: string;
    lastName: string;
}

function getFullName(user:PersonInterface):string {
    return `${user.firstName} ${user.lastName}`;
}

const person: PersonInterface = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person));
