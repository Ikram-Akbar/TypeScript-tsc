/*
    Basic Data types in Ts :
    primitive --> 
        -- number
        -- string
        -- boolean
        -- null
        -- undefined
        -- symbol
        -- void
        -- unknown
    Non-Primitive -->
        -- Array
        -- Tuple
        -- Object

*/

const title: string = "Key of House";
const weight: number = 0.2;
const isDuplicate: boolean = true;
const separation: null = null;
const color: undefined = undefined;
console.log({
    title,
    weight,
    isDuplicate,
    separation,
    color
});

//array:

let brands: string[] = ["Matador", "Link", "Pencil"];
let quantity: number[] = [125, 225, 458];

//tuple:
let carts: [string, number] = ["Matador", 25];

let cartsItem: [string, number][] = [
    ["Matador", 25],
    ["Link", 10],
    ["Pencil", 45]
];

let cartsElement: (string | number)[] = ["Matador", 25, "Link", 10, "Pencil", 45];


