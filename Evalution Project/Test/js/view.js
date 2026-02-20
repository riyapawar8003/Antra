function GameView() {
    this.boardEl = document.getElementById("board");
    this.scoreEl = document.getElementById("scoreValue");
    this.timeEl = document.getElementById("timeValue");
    this.startBtn = document.getElementById("startBtn");
  
    this.renderBoard = function (boardData) {
        let html = "";
      
        for (let i = 0; i < boardData.length; i++) {
          const block = boardData[i];
      
          let inside = "";
            if (block.type === "mole") {

              inside = `
                <img src="./assets/mole.jpg" class="character">
              `;

            } else if (block.type === "snake") {

              inside = `
                <img src="./assets/snake.png" class="character">
              `;

            }    
            html += `
              <div class="hole" data-id="${block.id}">
                ${inside}
              </div>
            `;
        }
      
        this.boardEl.innerHTML = html;
      };

  
    this.renderScore = function (score) {
      this.scoreEl.textContent = score;
    };
  
    this.renderTime = function (timeLeft) {
      this.timeEl.textContent = timeLeft;
    };
  }