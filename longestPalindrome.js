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