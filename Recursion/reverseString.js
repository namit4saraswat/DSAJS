function reverseString(s, l){
    if(l===1){
        return s[0]
    }
    return s[l-1] + reverseString(s,l-1) 
}

console.log (reverseString('cars', 4))