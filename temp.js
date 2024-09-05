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
 * @param {number} targetSum
 * @return {number[][]}
 */

const  {createAsLevelOrder} =  require ("./BinaryTree/createTreeFromArray")
var pathSum = function(root, targetSum) {
    let ans= new Array()
    let out = new Array()
    function pathSumUtil(node,target,rSum,ans,out){
        if(!node){
            return
        }else{
            rSum = rSum + node.data
            ans.push(node.data)
            if(!node.left && !node.right && rSum === target ){
                out.push([...ans])
            }
            
        }

        pathSumUtil(node.left,target,rSum,ans,out)
        pathSumUtil(node.right,target,rSum,ans,out)
        ans.pop()
        // return out
    }

    pathSumUtil(root,targetSum,0,ans,out)
    return out
};

let root =createAsLevelOrder([5,4,8,11,null,13,4,7,2,null,null,5,1])
console.log(pathSum(root,22))

