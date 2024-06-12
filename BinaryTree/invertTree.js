const  {createTree} =  require ("./createTreeFromArray")
const {levelOrder} = require("./levelOrderTraversal")

function invertTree(node){
    if(!node || !(node.left || node.right)){
        return null
    }

    let temp = node.right
    node.right=node.left
    node.left=temp

    invertTree(node.left)
    invertTree(node.right)
    return root
}



let root = createTree([1,2,3,4,5,6,7,8,9])
console.log(levelOrder(root))
let invRoot = invertTree(root)
console.log(levelOrder(invRoot))