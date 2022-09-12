//liner search algorithm 
const users =[{username:'asd',email:'asd@gmail.com'},
              {username:'qwer', email:'qwer@gmail.com'},
              {username:'zxcv', email:'zxcv'}];


function isUserExist(array, value){
    for(let item of array){
        if(item['username']===value){
            return true;
        }
    }
    return false;
}
const result  = isUserExist(users, 'asd');
console.log(result)