//find duplicate values in a given array


const numbers  = [1,2,3,4,4,2,5]
const unique = Array.from(new Set(numbers))
const duplicate = numbers.filter((item, index) => index !== numbers.indexOf(item))
console.log(duplicate);