var findMedianSortedArrays = function(nums1, nums2) {
    let newArray = nums1.concat(nums2);
    mergeSort(newArray);
    if(newArray.length % 2 === 0) {
        let mid = newArray.length / 2;
        let previous = mid-1;
        let median = (newArray[mid] + newArray[previous]) / 2;
        return median;
    } else {
        let mid = Math.floor(newArray.length / 2);
        return newArray[mid];
    }
};

// Another problem from leetcode. Given two sorted arrays, find the median of the two sorted arrays.
// This one would have been more challenging if I hadn't been studying merge sort recently. 
// What I chose to do was concatenate the two arrays, run the new one through an implementation of mergesort, 
// and then check the length of the array. If the length is even, take the median based off the two middle numbers.
// If the length is odd, just take the value of the middle index. This passed 2080 test cases in 112 ms.