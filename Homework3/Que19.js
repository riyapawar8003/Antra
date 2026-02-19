function largerThan(arr, num) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }

console.log(largerThan([1, 5, 3, 8, 2], 4));
