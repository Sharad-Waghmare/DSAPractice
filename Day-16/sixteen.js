// check square is another arrray
//array1 = [1,2,2,4] array2 = [1,4,4,16]

//map1 = {1:1, 2:2, 4:1}
//map2 = {1:1, 4:2, 16:1}

function checkSquare(array1 , arrray2){
    let map1 ={}
    let map2 ={}

    for(item of array1){
        map1[item] = (map1[item] || 0) + 1
    }
    console.log("Map1", map1)
    for(item1 of arrray2){
        map2[item1] = (map2[item1] || 0) + 1
    }
    console.log("Map2", map2)

    for(let key in map1){
        console.log('key', key);
        if(!map2[key * key]){
            return false;
        }
        if(map1[key] != map2[key * key]){
            return false;
        }  
    }
    return true;
}
const result = checkSquare([1,2,2,4],[1,4,4,16])
console.log(result)