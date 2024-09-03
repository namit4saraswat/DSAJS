/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let st = []
    st.push(temperatures[0])
   
    let ans = new Array(temperatures.length).fill(0)
    for(let i=0;i<temperatures.length;i++){
        while(st.length>0 && st[st.length-1].val<temperatures[i]){
            let index = st.pop().idx
            ans[index] = i - index 
        }
        st.push({val: temperatures[i], idx: i})
    }

    return ans
};

console.log(dailyTemperatures([30]))