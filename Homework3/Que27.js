function longestPalindrome(str) {
    if (!str || str.length < 2) return str || "";
  
    let bestStart = 0;
    let bestLen = 1;
  
    function expand(left, right) {
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        left--;
        right++;
      }
      let start = left + 1;
      let len = right - left - 1;
  
      if (len > bestLen) {
        bestLen = len;
        bestStart = start;
      }
    }
  
    for (let i = 0; i < str.length; i++) {
      expand(i, i);       // odd length
      expand(i, i + 1);   // even length
    }
  
    return str.slice(bestStart, bestStart + bestLen);
  }

console.log(longestPalindrome("babad"));
