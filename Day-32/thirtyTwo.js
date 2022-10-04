// insert an item at a specific index into an array

function insertElem(){
    let array = [1,2,3,4,5];
    let index = 3;
    let element = 9;
    array.splice(index, 0, element);
    console.log(array)
}
insertElem()
