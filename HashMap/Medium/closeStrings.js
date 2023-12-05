/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length != word2.length){
        return false
    }
    
    // if(word1.split('').sort().toString() === word2.split('').sort().toString()){
    //     return true
    // }else{
    //     return false
    // }
    let map1 = new Map()
    for(let i=0;i<word1.length;i++){
        if(map1.has(word1.charAt(i))){
            map1.set(word1.charAt(i), map1.get(word1.charAt(i)) + 1)
        }else{
            map1.set(word1.charAt(i), 1)
        }
    }
    arr1 = [];
    for(chars of  map1.values()){
        arr1.push(chars)
    }
    let set1 = new Set();
    for(charac of map1.keys()){
        set1.add(charac)
    }

    let map2 = new Map()
    for(let i=0;i<word2.length;i++){
        if(map2.has(word2.charAt(i))){
            map2.set(word2.charAt(i), map2.get(word2.charAt(i)) + 1)
        }else{
            map2.set(word2.charAt(i), 1)
            if(!set1.has(word2.charAt(i))){
                return false
            }
        }
    }

    arr2 = [];
    for(chars of  map2.values()){
        arr2.push(chars)
    }

    if((arr1.sort().toString()) === arr2.sort().toString()){
        return true
    }else{
        return false
    }
};

console.log(closeStrings('cat','bat'))

//this can be done using array of alphabets 
