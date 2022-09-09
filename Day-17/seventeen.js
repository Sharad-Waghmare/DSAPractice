//Recursion function --->when function call itself
//otherwise it will get called for infinit time
//If a function call itself then there must be an end point


let counter = 1;
function demoRecursion(num){
    if(counter > num){
        return;
    }
    console.log("Hello World "+ counter);
    counter++;
    demoRecursion(num)
}
demoRecursion(5)