//check prime num
const num = 2;
let isPrime = true;
if(num === 1){
    console.log('1 is neither prime or composite num')
}else if(num > 1){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is prime num`)
    }else{
        console.log(`${num} is not prime num`)
    }
}