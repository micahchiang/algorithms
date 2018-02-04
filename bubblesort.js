function bubblesort(arr) {
    var counter = 0;
    while (counter < arr.length) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        counter++;
    }
    console.log(arr);
    return arr;
}

// Bubblesort. Steps through a list repeatedly, comparing a value and its neighbour. If it's of greater
// value, swap them. Its complexity is quadratic, O(n^2). Angels cry when you use this.