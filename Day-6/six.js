// check Factorial num
function factNum(num){   
    if(num == 0){
        return 1;
    }else{
        return num * factNum(num - 1);
    }
}
console.log(factNum(5))