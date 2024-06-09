function findIfRotation2(s1,s2){
    s1=s1.toLowerCase()
    s2=s2.toLowerCase()

    return ((s1+s2).includes(s2) && s1.length===s2.length)
}

console.log(findIfRotation('ax','ax'))