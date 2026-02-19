function getFactors(num) {
    if (num <= 0) {
      return "Please enter a positive integer";
    }
  
    let factors = [];
  
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }

console.log(getFactors(12));
