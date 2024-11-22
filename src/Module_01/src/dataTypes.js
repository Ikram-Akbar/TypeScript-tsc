"use strict";
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
const title = "Key of House";
const weight = 0.2;
const isDuplicate = true;
const separation = null;
const color = undefined;
console.log({
    title,
    weight,
    isDuplicate,
    separation,
    color
});
//array:
let brands = ["Matador", "Link", "Pencil"];
let quantity = [125, 225, 458];
//tuple:
let carts = ["Matador", 25];
let cartsItem = [
    ["Matador", 25],
    ["Link", 10],
    ["Pencil", 45]
];
let cartsElement = ["Matador", 25, "Link", 10, "Pencil", 45];
