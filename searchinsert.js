var searchInsert = function(nums, target) {
    if(nums.indexOf(target) > 0) {
        return nums.indexOf(target);
    }
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < target) {
            index++;
        }
    }
    return index;
};
// another leetcode problem. A simple one since I'm on vacay :)
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.