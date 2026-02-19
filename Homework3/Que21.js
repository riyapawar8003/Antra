function getCombinations(arr, size) {
    let result = [];
  
    function combine(start, temp) {
      if (temp.length === size) {
        result.push([...temp]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        temp.push(arr[i]);
        combine(i + 1, temp);
        temp.pop();
      }
    }
  
    combine(0, []);
    return result;
  }

console.log(getCombinations([1, 2, 3, 4], 2));
