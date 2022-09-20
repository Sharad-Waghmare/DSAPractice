//check if given string is palindrom or not
//Case 1

function isPalindrom(str){
    let reverse = str.split(" ").reverse().join("");

    return str.toLowerCase() === reverse.toLowerCase()
}
console.log(isPalindrom("dad"))

//Case 2
function isPal(str){
   let newStr = str.toLowerCase()
   let left = 0;
   let right = newStr.length - 1;
   while(left < right){
    if(newStr[left] !== newStr[right]) return false;

    left++;
    right--;
   }
   return true
}
console.log(isPal("level"))