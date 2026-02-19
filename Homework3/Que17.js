function letterOccurrences(str) {
    let count = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (char !== " ") {
        if (count[char]) {
          count[char]++;
        } else {
          count[char] = 1;
        }
      }
    }
  
    return count;
  }

console.log(letterOccurrences("hello world"));
