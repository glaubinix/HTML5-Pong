define(['./config', './game'], function(config, Game) {
  /* Game main loop */
  var game = new Game();
  
  setInterval(function() {
    game.update();
    game.draw();
  }, 1000 / config.BOARD.FPS);
});