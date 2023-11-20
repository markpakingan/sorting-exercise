function insertionSort(arr) {

    // do a regular loop
    for (let i = 0; i < arr.length; i++) {
      let currentValue = arr[i];
  
      for (var j = i - 1; j > -1 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
      }
  
      arr[j + 1] = currentValue;
    }
  
    return arr;
  }
  

module.exports = insertionSort;

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
