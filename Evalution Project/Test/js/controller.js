function GameController(model, view) {
    this.model = model;
    this.view = view;
  
    this.moleTimer = null;
    this.snakeTimer = null;
    this.countdownTimer = null;
  
    this.isRunning = false;
  
    this.clearAllIntervals = function () {
        if (this.moleTimer) clearInterval(this.moleTimer);
        if (this.snakeTimer) clearInterval(this.snakeTimer);
        if (this.countdownTimer) clearInterval(this.countdownTimer);
      
        this.moleTimer = null;
        this.snakeTimer = null;
        this.countdownTimer = null;
      };
  
    this.updateScreen = function () {
      this.view.renderBoard(this.model.board);
      this.view.renderScore(this.model.score);
      this.view.renderTime(this.model.timeLeft);
    };
  
    this.stopGame = function (message) {
        this.isRunning = false;
        this.clearAllIntervals();
        this.model.clearBoard();
        this.updateScreen();
      
        this.view.startBtn.disabled = false;
      
        if (message) alert(message);
      };
      
      this.startGame = function () {
        
        if (this.isRunning) return;
      
        this.clearAllIntervals();
      
        this.model.reset();
        this.isRunning = true;
        this.updateScreen();
      
        
        this.view.startBtn.disabled = true;
      
        
        this.moleTimer = setInterval(() => {
          if (!this.isRunning) return;
      
          this.model.removeExpiredMoles();
          this.model.addMoleRandom();
          this.updateScreen();
        }, 300);
      
        
        this.snakeTimer = setInterval(() => {
          if (!this.isRunning) return;
      
          this.model.moveSnake();
          this.updateScreen();
        }, 2000);
      
        
        this.countdownTimer = setInterval(() => {
          if (!this.isRunning) return;
      
          this.model.timeLeft -= 1;
          this.view.renderTime(this.model.timeLeft);
      
          if (this.model.timeLeft <= 0) {
            this.stopGame("Time is Over !");
          }
        }, 1000);
      };
  
    this.onBoardClick = function (e) {
      if (!this.isRunning) return;
  
      const hole = e.target.closest(".hole");
      if (!hole) return;
  
      const id = Number(hole.dataset.id);
      const clickResult = this.model.clickCell(id);
  
      if (clickResult.result === "mole") {
        this.view.renderScore(this.model.score);
        this.view.renderBoard(this.model.board);
        return;
      }
  
      if (clickResult.result === "snake") {
        this.stopGame("Game Over! You clicked the snake.");
        return;
      }
    };
  
    this.bindEvents = function () {
      this.view.startBtn.addEventListener("click", () => {
        this.startGame();
      });
  
      this.view.boardEl.addEventListener("click", (e) => {
        this.onBoardClick(e);
      });
    };
  
    this.updateScreen();
    this.bindEvents();
  }