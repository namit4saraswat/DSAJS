
let i=12
function perfectSquare(num){
    if(num===0){
        return 0
    }
    if(num<=3){
        return num
    }
    
    for(let i=1;i*i<num;i++){
        let sq = i*i
        return Math.min(1 + perfectSquare(num-sq))
    }
    
}


console.log(perfectSquare(14))