// Given a binary tree, find the leftmost value of the last row of the tree.

var findBottomLeftValue = function(root) {
    let depth = 0;
    let result = root.val;
    
    function traverse(node, height) {
        let distance = height;
        if(!node) {
            return node;
        }
        if(node.left) {
            traverse(node.left, distance+1);
        }
        if(distance > depth) {
            depth = distance;
            result = node.val;
        }
        if(node.right) {
            traverse(node.right, distance+1);
        }
    }
    traverse(root, depth);
    return result;
};