//Delete all occurrence of element in given array


function deleteElement(arr, ele){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==ele){
            arr.splice(i, 1)
        }
    }
    return arr;
}
var arr = [1,2,3,4,5,6,7,8,9];
arr = deleteElement(arr, 8);
console.log(arr)