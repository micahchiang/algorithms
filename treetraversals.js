// preorder
function preOrder(root) {
    let values = [];
    if(!root) return values;
    function walk(node) {
        values.push(node.val);
        if(node.left) {
            walk(node.left);
        }
        if(node.right) {
            walk(node.right);
        }
    }
    walk(root);
    return values;
} 

// inorder 
function inOrder(root) {
    let values = [];
    if(!root) return values;
    function walk(node) {
        if(node.left) {
            walk(node.left);
        }
        values.push(node.val);
        if(node.right) {
            walk(node.right);
        }
    }
    walk(root);
    return values;
}

// postorder
function postOrder(root) {
    let values = [];
    if(!root) return values;
    function walk(node) {
        if(node.left) {
            walk(node.left);
        }
        if(node.right) {
            walk(node.right);
        }
        values.push(node.val);
    }
    walk(root);
    return values;
}

// level order
function levelOrder(root) {
    let values = [];
    let queue = [];
    values.push([root.val]);
    // use null to signify the end of a row.
    queue.push(root, null);
    while(queue.length > 1) {
        let row = [];
        let currentNode = queue.shift();
        while(currentNode !== null) {
            if(currentNode.left !== null) {
                row.push(currentNode.left.val);
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null) {
                row.push(currentNode.right.val);
                queue.push(currentNode.right);
            }
            currentNode = queue.shift();
        }
        if(row.length > 0) {
            values.push(row);
        }
        // null is pushed after all other nodes to keep track of rows.
        queue.push(null);
    }
    return values;
}