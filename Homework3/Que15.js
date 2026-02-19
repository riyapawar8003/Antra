function power(b, n) {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      result *= b;
    }
  
    return result;
  }

console.log(power(2, 3));
