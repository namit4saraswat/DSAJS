/**
 * @param {string} s
 * @return {string}
 */
//the sky is blue, blue is sky the
var reverseWords = function (s) {
    s = s.trim();
    let i = s.length - 1;
    let wordLength = 0;
    ans = "";
    let space = 0;
    while (i >= 0) {
        if (s.charAt(i) === " " && space<1) {
            space++;
            ans = ans + s.substring(i+1, i + wordLength + 1) + " ";
            wordLength = 0;
        } else {
               if(s.charAt(i) != " ") {
                wordLength++;
                space=0;
               }
            }
            i--;
        }
    ans = ans + s.substring(i, i + wordLength + 1) + " ";

    return ans.trim()

};



console.log(reverseWords("  hello world  "));