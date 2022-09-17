//Find the maximum occuring character in given string

function getCharString(str){
    const map = {}
    str.split("").forEach(element => {
        map[element] = map[element]?map[element]+1:1;
        // console.log(map[element])
    });
    // console.log(map)

    let max = 1;
    char = str[0];
    for(let k in map){
        if(map[k] > max){
            max = map[k]
            char = k
        }
    }
    return char;
}
const result = getCharString('Hello World');
console.log(result)