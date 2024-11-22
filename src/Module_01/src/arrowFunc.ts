
const findTheLargeNumber = (arr:number[]):number => {
    let lgNumber: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lgNumber) {
            lgNumber = arr[i];
        }
    }
    return lgNumber;
}