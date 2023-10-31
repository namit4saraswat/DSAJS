/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const n = s.length;
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

    s = s.split("");
    let i=0;
    let j=n-1;
    while(i<j){
        if((isVowel(s[i].toLowerCase())) && (isVowel(s[j].toLowerCase()))){
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }

        if(!isVowel(s[i].toLowerCase())){
            i++;
        }
        if(!isVowel(s[j].toLowerCase())){
            j--;
        }
    }

    return s.join("");

};

console.log(reverseVowels('hello'))