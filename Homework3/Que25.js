function Longest_Country_Name(countries) {
    let longest = "";
  
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].length > longest.length) {
        longest = countries[i];
      }
    }
  
    return longest;
  }

console.log(Longest_Country_Name(["India", "United States of America", "China", "Brazil"]));
