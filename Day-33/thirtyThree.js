//find the factors of an integer


const num = 10;
console.log(`The factors of ${num} is: `)

for(let i=0; i<=num; i++){
    if(num % i == 0){
        console.log(i)
    }
}