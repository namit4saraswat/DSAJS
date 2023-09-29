/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const n = ransomNote.length;
    let m = magazine.length;
    if (n > m) {
        return false;
    }

    
    let i = 0;
    while (i < n) {
        magazine = magazine.replace(ransomNote.charAt(i), '');
        if (magazine.length != m - 1) {
            return false;
        }
        m--;
        i++;
    }

    return true;
};


console.log(canConstruct("aa", "ab"));