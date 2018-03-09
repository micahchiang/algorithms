var longestPalindrome = function(s) {
    let maxLength = 0;
    let pal;
    if(s.length < 2) return s;
    for(let i = 0; i < s.length; i++) {
        let sub = s.substring(i,s.length);
        for(let j = sub.length; j > 0; j--) {
            let dubSub = sub.substring(0,j);
            if(isPalindrome(dubSub) && dubSub.length > maxLength) {
                maxLength = dubSub.length;
                pal = dubSub;
            }
        }
    }
    return pal;
}

 function isPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    return reverse === string;
}

// Given a string, find and return the longest substring that is also a palindrome. 
// Don't use this, it isn't efficient at all...

// Work in Progress. I wasn't necessarily happy with the above solution, so I wanted to approach from a different angle.
// The below is not finished, as there are still some cases that need handling (mainly how left and right are used). 
// It uses recursion. Sorry it's a little sloppy.
// I've been in a class all day, and haven't had much time to sit down and actually code.

var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    return palindromeRecurse(s,0,s.length);
}

function palindromeRecurse(s,left,right) {
    var str = s.substring(left,right);
    if(isPalindrome(str)) {
        return str;
    }
    if(left < right) {
        return palindromeRecurse(str,left+1,right-1);
    }
}

function isPalindrome(s) {
    let reverse = s.split('').reverse().join('');
    return reverse === s;
}