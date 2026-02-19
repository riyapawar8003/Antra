function longestUniqueSubstring(str) {
    let start = 0;
    let bestStart = 0;
    let bestLen = 0;
    let lastSeen = {};
  
    for (let end = 0; end < str.length; end++) {
      let ch = str[end];
  
      if (lastSeen[ch] !== undefined && lastSeen[ch] >= start) {
        start = lastSeen[ch] + 1;
      }
  
      lastSeen[ch] = end;
  
      let windowLen = end - start + 1;
      if (windowLen > bestLen) {
        bestLen = windowLen;
        bestStart = start;
      }
    }
  
    return str.slice(bestStart, bestStart + bestLen);
  }

console.log(longestUniqueSubstring("abcabcbb"));
