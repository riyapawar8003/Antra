function GameModel() {
    this.board = [];
    this.score = 0;
    this.timeLeft = 30;
  
    this.currentSnakeId = -1; 
  
    this.makeBoard = function () {
      this.board = [];
      for (let i = 0; i < 12; i++) {
        this.board.push({
          id: i,
          type: "empty",     
          until: 0           
        });
      }
    };
  
    this.reset = function () {
      this.score = 0;
      this.timeLeft = 30;
      this.currentSnakeId = -1;
      this.makeBoard();
    };
  
    this.clearBoard = function () {
      for (let i = 0; i < this.board.length; i++) {
        this.board[i].type = "empty";
        this.board[i].until = 0;
      }
      this.currentSnakeId = -1;
    };
  
    this.countMoles = function () {
      let count = 0;
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].type === "mole") count++;
      }
      return count;
    };
  
    this.removeExpiredMoles = function () {
      const now = Date.now();
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].type === "mole" && now >= this.board[i].until) {
          this.board[i].type = "empty";
          this.board[i].until = 0;
        }
      }
    };
  
    this.addMoleRandom = function () {
      if (this.countMoles() >= 3) return;
  
      const emptyIds = [];
      for (let i = 0; i < this.board.length; i++) {
        if (this.board[i].type === "empty") emptyIds.push(this.board[i].id);
      }
      if (emptyIds.length === 0) return;
  
      const pickIndex = Math.floor(Math.random() * emptyIds.length);
      const pickedId = emptyIds[pickIndex];
  
      this.board[pickedId].type = "mole";
      this.board[pickedId].until = Date.now() + 2000; 
    };
  
    this.moveSnake = function () {
      
      if (this.currentSnakeId !== -1) {
        if (this.board[this.currentSnakeId].type === "snake") {
          this.board[this.currentSnakeId].type = "empty";
          this.board[this.currentSnakeId].until = 0;
        }
      }
  
  
      const newId = Math.floor(Math.random() * this.board.length);
  
      
      this.board[newId].type = "snake";
      this.board[newId].until = 0;
      this.currentSnakeId = newId;
    };
  
    this.clickCell = function (id) {
      if (!this.board[id]) return { result: "none" };
  
      const cell = this.board[id];
  
      if (cell.type === "mole") {
        cell.type = "empty";
        cell.until = 0;
        this.score += 1;
        return { result: "mole" };
      }
  
      if (cell.type === "snake") {
        return { result: "snake" };
      }
  
      return { result: "empty" };
    };
  
    this.makeBoard();
  }