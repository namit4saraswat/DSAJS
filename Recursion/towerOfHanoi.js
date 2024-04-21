function towerOfHanoi(n, from_rod,  to_rod,  aux_rod, count){
    if(n===0){
        return 
    }
    
    towerOfHanoi(n-1, from_rod,  aux_rod,  to_rod, count)
    
    console.log(n + ' moving ' + from_rod  + ' -> ' + to_rod)
    count++
    towerOfHanoi(n-1, from_rod,  to_rod,  aux_rod)
    
    return count
}

console.log(towerOfHanoi(3,'a','b','c', 0))