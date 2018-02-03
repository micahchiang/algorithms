# peakfinder algorithm. Finds a peak in a one dimensional array / list, where a peak is
# defined as a number that is greater than or equal to its neighbours.


def peakfinder(arr):
    mid = int(len(arr) / 2)
    left = mid - 1
    right = mid + 1
    if len(arr) <= 1:
        print(arr[mid])
        return arr
    if arr[left] <= arr[mid] >= arr[right]:
        return arr[mid]
    if arr[left] > arr[mid]:
        return peakfinder(arr[:mid])
    if arr[right] > arr[mid]:
        return peakfinder(arr[right:])

# Divide and Conquer method. If left is greather than mid, only search left half.
# If right is greather than mid, do the same. 
# Complexity is O(log n).