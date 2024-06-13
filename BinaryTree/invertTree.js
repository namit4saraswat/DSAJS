const  {createTree} =  require ("./createTreeFromArray")
const {levelOrder} = require("./levelOrderTraversal")
function invertTreeUtil(node){
    if(!node || !(node.left || node.right) ){
        return
    }
    
    let temp = node.left
    node.left = node.right
    node.right = temp
    invertTree(node.left)
    invertTree(node.right)
}


let root = createTree([1,2,3,4,5,6,7,8,9])
console.log(levelOrder(root))
invertTree(root)
console.log(levelOrder(root))