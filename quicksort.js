function swap(arr, i , j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, left, right) {
    if(arr.length < 2) {
        return arr;
    }
    if(left < right) {
        let pivot = right;
        partitionIndex = getPartitionIndex(arr, pivot, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function getPartitionIndex(arr, pivot, left, right) {
    let pivotVal = arr[pivot];
    let index = left;
    for(let i = left; i < right; i++) {
        if(arr[i] < pivotVal) {
            swap(arr, i, index);
            index++
        }
    }
    swap(arr, right, index);
    return index;
}

// Ah yes....quicksort. Even though at worst it can still degrade to O(n^2), it's still a much better alternative, in almost 
// every case, to most of the other sorts in this repository. It's best complexity is O(n log n). 
// We have three different functions for this: swap, quickSort, and getPartitionIndex. 

// I won't explain swap. How dare you.

// quickSort is pretty self-explanatory, there's a check for the length of the array because why would you try and sort 
// an array of only one element. Then, while left is less than right, set a pivot, which is an array index, and call getPartitionIndex
// to retrieve an index.

// getPartitionIndex is, at least for me, where the real magic is happening. It takes an array, a pivot, a left, and a right.
// Essentially what is happening here is a comparison of the value at arr[i] against the pivot value.
// If the value at arr[i] is less than the pivot value, then it should be in front of it. 
// To do this, you swap the values of arr[i] and arr[index]. In this function, index is a variable that keeps track 
// of the array index up to which the array has been sorted.
// Finally, you return index from the function, and resuse it as your partition divider in recursive quicksort calls.
// You can do this because no matter how the sub-arrays in front of and behind the index are sorted, you know for sure that 
// all greater values follow it, and all lesser values lead up to it.

// To be honest...this algorithm is relatively dense to me. I understand what it does and how it achieves its end goal. 
// I think one of the things I need to work on, from a computer science stand point, is understanding how to take a high level
// definition of how an algorithm functions, and break it into smaller steps using the tools at my disposal, those tools being 
// things like for loops, if statements etc. Honing down these skills should help with approaching algorithms in general.