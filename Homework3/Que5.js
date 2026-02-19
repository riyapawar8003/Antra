function capitalizeWords(str) {

    let result = "";
    let capitalizeNext = true;
  
    for (let i = 0; i < str.length; i++) {
  
      if (str[i] === " ") {
        result += " ";
        capitalizeNext = true;
      }
      else if (capitalizeNext) {
        result += str[i].toUpperCase();
        capitalizeNext = false;
      }
      else {
        result += str[i];
      }
    }
  
    return result;
  }

console.log(capitalizeWords("hello world"));