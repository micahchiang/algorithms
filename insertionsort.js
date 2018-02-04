function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    console.log(arr);
    return arr;
}

// Insertion Sort. Iterates over an array, extracts an individual value. Compares that value with the one preceding it
// since the beginning of the list is sorted. Worst case complexity is quadratic, O(n^2), best case is linear, O(n).
// Still better than selection sort, and angels cry less, but they still cry. Useful on smaller data sets.