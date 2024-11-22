
const bookStore :{
    readonly name: string;
    employee: number;
    isPopular: boolean;
    location: string;
} = {
    name: "Azad Book House",
    employee: 5,
    isPopular: true,
    location:"Laksham, Cumilla , Bangladesh"
}

// bookStore.name = "arabian"
// Cannot assign to 'name' because it is a read-only property.

// Using an Interface:
interface BookStore {
    readonly name: string;
    employee: number;
    isPopular: boolean;
    location: string;
}

const bookStore2: BookStore = {
    name: "Azad Book House",
    employee: 5,
    isPopular: true,
    location: "Laksham, Cumilla , Bangladesh"
};


// Using a Type Alias
type BookStore3 = {
    readonly name: string;
    employee: number;
    isPopular: boolean;
    location: string;
};

const bookStore3: BookStore3 = {
    name: "Azad Book House",
    employee: 5,
    isPopular: true,
    location: "Laksham, Cumilla , Bangladesh"
};
