export default function two_crystal_balls(breaks: boolean[]): number {

    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAmount;

    for(; i < breaks.length; i+=jmpAmount){
        if(breaks[i]){
            break;
        }
    }
 
    i -= jmpAmount;

    for(let j = 0; j <= jmpAmount && i < breaks.length; ++j, ++i){
        if(breaks[i]){
            console.log(i);
            return i;
        }
    }
    console.log("no breaking point");
    return -1;
}