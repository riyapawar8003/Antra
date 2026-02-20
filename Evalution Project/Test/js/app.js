(function () {
    const model = new GameModel();
    const view = new GameView();
    new GameController(model, view);
  })();