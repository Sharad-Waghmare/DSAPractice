// given an array find the element which is less than 10

const input1=[5,10,15,20]
const output1=[5]

const input2=[1,2,3,4,15,16]
const output2=[1,2,3,4]


function Array(arr){
    newArr = []
    for(i=0; i<arr.length ; i++){
        if(arr[i]<10){
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

Array(input2)