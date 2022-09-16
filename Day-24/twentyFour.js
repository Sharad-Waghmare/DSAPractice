//Insertion Sort
const array = [8,2,4,1,3];

//1.consider the 2nd element , arr[1]
//2.arr[j] > current swapping

function insertionSorted(array){
    for(let i=1; i<array.length; i++){
        let current = array[i]
        let j = i-1;
        while(j>=0 && array[j]>current){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current
    }
    return array
}
const result = insertionSorted(array)
console.log(result)
