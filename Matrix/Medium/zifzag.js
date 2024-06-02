function zigzag(s,numRows){
    let j=0
    let mt = Array.from({ length: numRows }, () => Array.from({ length: s.length/2 }, () => 0));
    let flag=true
    let p=0
    let i=0
    let ans=''
    while(p<s.length){
        mt[i%numRows][j]=s[p]
        if(flag){
            i++
        }else{
            i--
            j++
        }
        if(i===numRows-1 || i===0){
            flag=!flag
        }
        p++
    }
    for(let i=0;i<mt.length;i++){
        for(let j=0;j<mt[i].length;j++){
            if(mt[i][j]!=0){
                ans=ans+mt[i][j]
            }
        }
    }

    return ans

}

console.log(zigzag('AB',1))