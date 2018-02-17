var lengthOfLongestSubstring = function(s) {
    let length = 0;
    for(let i = 0; i < s.length; i++) {
        let tracker = [];
        tracker.push(s[i]);
        let counter = i+1;
        let isSubstring = true;
        while(isSubstring) {
            if(tracker.indexOf(s[counter]) < 0 && s[counter]) {
                tracker.push(s[counter]);
                counter++;
            } else {
                isSubstring = false;
            }
        }
        if(tracker.length > length) {
            length = tracker.length;
        }
    }
    return length;
};

// A problem from Leetcode. The description is: find the length of the longest substring in a given string. 
// So obviously, the time complexity for this isn't very good, calculating complexity isn't my strongest point, 
// but, if I had to make an attempt, I'd probably say this is closer O(n^2), or something like that. It iterates over every 
// index of the string, but also contains a while loop that iterates over an array that keeps track of the substring. 
// There are definitely better ways to achieve this, but I feel satisfied with having come up with it before looking at how any 
// external solutions were done. It passed 983 test cases in 500ms. 