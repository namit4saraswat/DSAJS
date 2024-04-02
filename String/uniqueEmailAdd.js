/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set()
    for(let i=0;i<emails.length;i++){
        let formatted = emails[i].split('@')[0].split('+')[0].replaceAll('.','') + '@'+  emails[i].split('@')[1]
        set.add(formatted)
    }

    return set.size
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.email.leet+alex@code.com"]))