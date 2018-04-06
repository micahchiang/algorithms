// given a string of (), {}, [], return whether or not it closes all it's pairs correctly.

var isValid = function(s) {
    if(s.length < 2) {
        return false;
    }
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let el = s[i];
        if(map[el]) {
            stack.push(map[el]);
        } else {
            if(stack.pop() !== el) {
                return false;
            }
        } 
    }
    return stack.length === 0;
};