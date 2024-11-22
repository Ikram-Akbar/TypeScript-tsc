{
    //

    /*
    function getUserInfo(name, age, isAdmin) {
      return `${name} is ${age} years old and ${isAdmin ? "an admin" : "not an admin"}.`;
    }
    
    const user = getUserInfo("Alice", 25, true);
    console.log(user);

     */


    function getUserInfo(name:string, age:number, isAdmin:boolean):string {
        return `${name} is ${age} years old and ${isAdmin ? "an admin" : "not an admin"}.`;
    }

    const user:string = getUserInfo("Alice", 25, true);
    console.log(user);


    //
}