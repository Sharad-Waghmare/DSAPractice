//check armstrong num
var x, y, z = 0;
var num = 153;
y = num;
while(y > 0){
    x = y % 10;
    y = parseInt(y / 10);
    z = z + (x * x * x);
}
if(num == z){
    console.log('given is armstrong num');
}else{
    console.log('given is not armstrong num')
}