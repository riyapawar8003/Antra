function stringCombinations(str) {
    let result = [];
    let k = 0;
  
    for (let i = 0; i < str.length; i++) {
      let combination = "";
  
      for (let j = i; j < str.length; j++) {
        combination += str[j];
        result[k] = combination;
        k++;
      }
    }
  
    return result;
  }

console.log(stringCombinations("dog"));
  