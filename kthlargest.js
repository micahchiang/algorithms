// another leetcode problem. Given an unsorted array and a value k, find the kth largest value in that array.
// Relatively simple solution, sort the array first, and then just return the value at index array.length-k.
// I went with mergesort because javascript's inbuilt method of sorting seemed to be unreliable.

var findKthLargest = function(nums, k) {
    if(nums.length < 2) return nums[0];
    nums = mergeSort(nums);
    return nums[nums.length-k];
};

function partition(arr,start,end) {
    let newArr = [];
    for(let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = partition(arr,0,mid);
    let right = partition(arr,mid,arr.length);
    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr);
    return arr;
}

function merge(l,r,a) {
    let nL = l.length;
    let rL = r.length;
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < nL && j < rL) {
        if(l[i] < r[j]) {
            a[k] = l[i];
            i++;
        } else {
            a[k] = r[j];
            j++;
        }
        k++;
    }
    while(i < nL) {
        a[k] = l[i];
        k++;
        i++;
    }
    while(j < rL) {
        a[k] = r[j];
        j++;
        k++;
    }
}