"use strict";
function getFullName(user) {
    return `${user.firstName} ${user.lastName}`;
}
const person = { firstName: "John", lastName: "Doe" };
console.log(getFullName(person));
