function validShuffle(str1,str2,shuffle){
    let map1 = new Map()

    for(i=0;i<str1.length;i++){
        if(map1.has(str1[i])){
            map1.put(str1[i],map1.get(str1[i])+1)
        }else{
            map1.put(str1[i],1)
        }
    }
    for(i=0;i<str2.length;i++){
        if(map1.has(str2[i])){
            map1.put(str2[i],map1.get(str2[i])+1)
        }else{
            map1.put(str2[i],1)
        }
    }

    //Now another for loop and decrease the frequency while traversing shuffle
    //every freq should become 0

}

validShuffle('BA','XY','XYAB')