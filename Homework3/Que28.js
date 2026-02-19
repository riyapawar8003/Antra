function greet(name) {
    return "Hello " + name;
  }
  
  function processUserInput(callback) {
    let userName = "Riya";
    return callback(userName);
  }
  
  console.log(processUserInput(greet));
