//Bubble Sorting
//Sorting Alogrithm where the largest values bubble up at the top

function bubbleSort(array){
    for(let i=array.length; i > 0; i--){
        for(let j=0; j<i-1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array;
}
const result = bubbleSort([4,2,5,1,7,3,8,9])
console.log(result)