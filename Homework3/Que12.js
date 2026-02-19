function isPerfectNumber(num) {
    if (num <= 0) {
      return "Please enter a positive number";
    }
  
    let sum = 0;
  
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
  
    if (sum === num) {
      return num + " is a Perfect Number";
    } else {
      return num + " is NOT a Perfect Number";
    }
  }

console.log(isPerfectNumber(28));
