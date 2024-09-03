/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

const  {createTree} =  require ("./BinaryTree/createTreeFromArray")
const  {createAsLevelOrder} =  require ("./BinaryTree/createTreeFromArray")



var binaryTreePaths = function(root) {
    const paths = [];
    
    function findPaths(node, array){
        if(!node){
            return
        }
    
        array.push(node.data)

        if(!node.left && !node.right){
            paths.push(array)
        }else{
            findPaths(node.left,[...array])
            findPaths(node.right,[...array])
        }
    
        
    }

    findPaths(root, []);
    return paths;
};

let root2 = createAsLevelOrder([1,2,3,null,5])
console.log(binaryTreePaths(root2))
