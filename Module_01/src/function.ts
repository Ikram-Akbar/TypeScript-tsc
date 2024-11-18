
/* function fly(res: string): string {
    let myDream: string;
    if (res == "Go") {
        
    }
} */

/*  
bandScore:
            5 --> Try again,
            6 --> go to Germany,
            7 --> go to Canada,
            8 --> go to Australia,
            9 --> go to USA

*/
//Normal : Function 
function fly(bandScore:number ): string {
    let myDream: string;
        switch (bandScore) {
            case 5:
                myDream = "Try again";
                break;
            case 6:
                myDream = "Go to Germany";
                break;
            case 7:
                myDream = "Go to Canada";
                break;
            case 8:
                myDream = "Go to Australia";
                break;
            case 9:
                myDream = "Go to USA";
                break;
            default:
                myDream = "Invalid band score";
        }
    
    return myDream;
}

console.log(fly(5));
