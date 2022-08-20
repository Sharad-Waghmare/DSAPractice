const num10 = 50; 
const num20 = 70
const num30 = 40
let largest;

    if(num10 >= num20 && num10 >= num30){
        largest = num10;
    }
    else if(num20 >= num10 && num20 >= num30){
        largest = num20;
    }
    else{
        largest = num30;
    }
console.log('the largest num is ' + largest)