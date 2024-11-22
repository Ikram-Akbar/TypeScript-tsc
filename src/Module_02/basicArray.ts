function findMax(arr:number[]):number {
    return Math.max(...arr);
}

const numbers:number[] = [10, 20, 5, 8];
console.log(findMax(numbers));
