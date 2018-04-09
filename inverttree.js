// recursive solution to inverting a binary tree.

var invertTree = function(root) {
    if(!root) return null;
    if(!root.left && !root.right) {
        return root;
    }
    let left = root.left;
    let right = root.right;
    root.left = right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};