function isValid(ans){
    let stk=[]
    let i=0
    while(i<ans.length){
        if(ans[i]==='('){
            stk.push(')')
        }else{
            if(stk.pop()!=ans[i]){
                return false
            }
        }
        i++
    }

    return stk.length===0
}

function generatePar(n,i,ans,out,p,q){
    if(p<q){
        return
    }
    if(i===n){
        if(p===q){
            out.push(ans)
        }   
        return
    }
    
    generatePar(n,i+1,ans+'(',out,p+1,q)
    generatePar(n,i+1,ans+')',out,p,q+1)
    return out
}

var generateParenthesis = function(n) {
    if(n%2!=0){
        return []
    }
    return generatePar(n,0,'',[],0,0)
};

// console.log(isValid('()()'))
console.log(generateParenthesis(6))