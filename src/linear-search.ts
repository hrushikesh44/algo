export default function linear_search(haystack: number[], needle: number): boolean{
    for(let i = 0; i < haystack.length; ++i){
        if (haystack[i] === needle){
            console.log('true')
            return true
        }
    }
    console.log('false')
    return false;
}
