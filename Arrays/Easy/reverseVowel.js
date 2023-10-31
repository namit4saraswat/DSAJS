/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const n = s.length;
    console.log(typeof(s[1]))
    let isVowel = function(c){
        switch (c) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                return false;
        }
           
    }
    let j = n-1;
    for(let i=0;i<n;i++){
        if(isVowel(s[i].toLowerCase())){
            while(!isVowel(s[j].toLowerCase())){
                j--;
            }
            if(i>=j){
                return s;
            }else{
                s = s.substring(0,i) + s[j] + s.substring(i+1,j) + s[i] + s.substring(j+1,n);
                j--;
            }
        }
    }

    return s;
};

console.log(reverseVowels('aA'))