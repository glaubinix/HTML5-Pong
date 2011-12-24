define(["./config", "./player"], function(config) {
  
  HumanPlayer.prototype = require('./player');
  function HumanPlayer() {
    this.x = config.CANVAS.WIDTH - this.width - 10;
  }
  
  return new HumanPlayer();
});