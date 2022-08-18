const arr1=[2,-4,6,8,-9]
const arr2=[1,2,3,4]

//while loop

function str(arr){
    var i=0
    var ans=""
    while(i<arr.length){
        if(arr[i]<0){
            ans=ans+0
        }
        else{
            ans=ans+arr[i]
        }
        i++
    }
    console.log(i);
    console.log(ans)
}

str(arr1)