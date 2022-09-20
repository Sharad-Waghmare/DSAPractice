//checking Sum zero 
//[-5, -4, -3, -2, 0, 2, 4, 6, 8] ---input
//[-4, 4] ---output;

// function findSumzeroNum(array){
//     let left = 0;
//     let right = array.length-1;
//     while(left < right){
//         sum = array[left] + array[right];
//         if(sum === 0){
//             return [array[left], array[right]];
//         }else if(sum > 0){
//             right--;
//         }else{
//             left++;
//         }
//     }
// }
// const result = findSumzeroNum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);



//case 2
function getSum(arr){
    console.log(arr.length)
    for(let num of arr){
        for(let i = 1; i < arr.length; i++){
            if(num + arr[i] === 0){
                console.log(arr[i])
                return [num, arr[i]]
            }
        }
    }
}
const res = getSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);