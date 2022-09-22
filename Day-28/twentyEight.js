//Longest substring without reapating characters


// Input s ="asdasdasd";
// Output : 3
//Explanation: The answer is "asd", with the length of 3.


var lengthOfLongestSubstring = function(s){
    if(!s){
        return 0;
    }

    let end =0;
    let start =0;
    let maxlength =0;

    const Uniquecharacters = new Set();
    
    while(end < s.length){
        if(!Uniquecharacters.has(s[end])){
            Uniquecharacters.add(s[end])
            end++;
            maxlength = Math.max(maxlength, Uniquecharacters.size);
        }else{
            Uniquecharacters.delete(s[start])
            start++;
        }
    }
    return maxlength;
}
const res = lengthOfLongestSubstring('asdasdss')
console.log(res)