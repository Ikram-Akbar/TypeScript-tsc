"use strict";
function myFunc(arr, T_func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(T_func(arr[i], i));
    }
    return newArr;
}
function myFunc2(arr, T_func) {
    return arr.map((n, i) => T_func(n, i));
}
