function walk(el) {
    let depth = 1;
    while(el.parentNode && el.parentNode.tagName !== 'BODY') {
        el = el.parentNode;
        depth++;
    }
    return depth;
}

// a pretty simple one today since I'm a little beat...I used a varied version of this in a recent
// coding challenge some folks had me do. It takes an element, and walks up through its parent elements as long
// as there is one. Finally, it returns the depth.