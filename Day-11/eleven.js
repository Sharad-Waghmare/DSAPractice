//string anagram 
//'hello'--->'llheo'

//check condition
//check length for both string
//{h:0,e:0,l:0,o:0}

function anagramStr(string1, string2){
    if(string1.length!==string2.length){
        return false;
    }
    let counter = {}
    for(let letter of string1){
        counter[letter] = (counter[letter] ||0 ) + 1;
        console.log(counter[letter])
        console.log(counter)
    }
    for(let items of string2){
        if(!counter[items]){
            return false;
        }
        counter[items]-=1;
    }
    return true;
}
 const result = anagramStr('hello', 'llheo')
 console.log(result);