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
 * @return {number[]}
 */

function inorderUtil(node,ans){
    if(node!=null){
        inorderUtil(node.left,ans)
        ans.push(node)
        inorderUtil(node.right,ans)
    }
    
    return ans
}
var inorderTraversal = function(root) {
    let ans=[]
    if(!root){
        return ans
    }
    
    return inorderUtil(root,ans)
};

console.log