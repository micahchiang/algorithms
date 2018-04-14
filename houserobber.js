// You are a professional robber planning to rob houses along a street. 
//Each house has a certain amount of money stashed, the only constraint stopping you from 
//robbing each of them is that adjacent houses have security system connected and 
//it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
//determine the maximum amount of money you can rob tonight without alerting the police.

var rob = function(nums) {
  if (nums.length < 1) {
    return 0;
  }
  if (nums.length < 2) {
    return nums[0];
  }
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(a, b + nums[i]);
    }
  }
  return Math.max(a, b);
};
