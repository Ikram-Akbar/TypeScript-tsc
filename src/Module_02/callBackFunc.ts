type CallbackType = (x:number)=>number;

function processArray(arr: number[], callback:CallbackType) {
    return arr.map(callback);
}

const result = processArray([1, 2, 3], (x) => x * 2);
console.log(result);
