const  {createTree} =  require ("./createTreeFromArray")

const diameterOfBinaryTree = function(root) {
    let dia = 0
    function dfs(root){
        if(!root.data){
            return 0
        }
        const l = dfs(root.left)
        const r = dfs(root.right)

        dia = Math.max(dia,l+r)
        return Math.max(l,r) + 1
    }
    dfs(root)
    return dia

}

let root = createTree([1,2,3,4,5])
console.log(diameterOfBinaryTree(root))
