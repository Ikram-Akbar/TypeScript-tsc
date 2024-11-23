
type TransformationFunction = (n:number, i:number) => number;

function myFunc (arr:number[], T_func:TransformationFunction ): number[] {
    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(T_func(arr[i], i));
    }
    return newArr;
}

function myFunc2(arr: number[], T_func: TransformationFunction): number[] {
    return arr.map((n, i) => T_func(n, i));
}