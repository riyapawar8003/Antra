function longestWord(str) {

    let longest = "";
    let current = "";
  
    for (let i = 0; i < str.length; i++) {
  
      if (str[i] !== " ") {
        current += str[i];
      } 
      else {
        if (current.length > longest.length) {
          longest = current;
        }
        current = "";
      }
    }
  
    // Check last word after loop ends in case string doesn't end with a space 
    if (current.length > longest.length) {
      longest = current;
    }
  
    return longest;
  }

console.log(longestWord("Web Development Tutorial"));