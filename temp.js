/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let t_map = new Map()
    for(let i=0;i<t.length;i++){
        t_map.set(s[i],-1)
    }
    let start=0
    for(let i=0;i<s.length;i++){
        if(t_map.get(s[i]===-1)){
            t_map.set(s[i],i) 
        }else if(t_map.get(s[i]>=0)){
            
        }
    }
};

console.log(minWindow("ADOBECODEBANC","ABC"))

//uncomplete solution