// // convert array to string 
// if num is less than 0 add 0 to string

 const input1=[2,-4,6,8,-9]
const input2=[1,2,3,4]
// str = " ";
// // for(i =0; i<input1.length; i++){
// //     if(input1[i]>0){
// //         str = str + input1[i]
// //     }
// //     else{
// //         str = str + 0
// //     }
// // }
// // console.log(str)

// for(i=0; i<input2.length; i++){
//     if(input2[i]>0){
//         str = str + input2[i]
//     }
//     else{
//         str = str + input2[i]
//     }
// }
// console.log(str)






// function arraytostriNg(arr){
//     var str=""
// for(i=0; i<arr.length; i++){
//     if(arr[i]>0){
//         str = str + arr[i]
//     }
//     else{
//         str = str + 0
//     }
// }
// console.log(str)
// }

// arraytostriNg([2,-2,3,5])


function arraytostriNg(arr){
    var str=""
    let i =0;
    while(i < arr.length){
        i++;
        if(arr[i] >0){
            str = str + arr[i]
        }
        else{
            str = str + 0
        }
console.log(str)
    }
}
arraytostriNg([2,-2,3,5])








