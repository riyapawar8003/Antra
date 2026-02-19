function secondMinMax(arr) {
    let uniqueArr = [...new Set(arr)];
    uniqueArr.sort(function(a, b) {
      return a - b;
    });
  
    let secondLowest = uniqueArr[1];
    let secondGreatest = uniqueArr[uniqueArr.length - 2];
  
    return secondLowest + "," + secondGreatest;
  }

console.log(secondMinMax([1, 2, 3, 4, 5]));
