function partition(a,start,end) {
    let newArray = [];
    for(let i = start; i < end; i++) {
      newArray.push(a[i]);
    }
    return newArray;
  }
  
  function mergeSort(a) {
    if (a.length < 2) return;
    let mid = Math.floor(a.length / 2);
    let left = partition(a, 0, mid);
    let right = partition(a,mid,a.length);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, a);
    return a;
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

  // mergesort. Generally a better option that quicksort, as its worst case complexity is O(n log n). 
  // mergeSort takes an array, and divides it into two sub arrays. This is done recursively. The exit 
  // condition is when the length of the sub array is less than two. 
  // In the merge function, the values of the sub arrays are evaluated. The lowest ones replace the the corresponding 
  // index in the array passed in. This is okay to do because the array passed in already contains the values being checked. 
  // The variables i, j, and k keep track of the array indexes. They are used to compare values.