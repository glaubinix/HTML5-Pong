define(["./config", "./player"], function(config) {
  
  /**
   * Inherit from player.
   */
  HumanPlayer.prototype = require('./player');
  
  /**
   * Basic class constructor.
   */
  function HumanPlayer() {
    this.x = config.CANVAS.WIDTH - this.width - 10;
  }
  
  /**
   * Updates the player position.
   *
   * @return void
   */
  HumanPlayer.prototype.update = function() {
    if (keydown.up) {
      this.y -= config.PLAYER.SPEED;
    } else if (keydown.down) {
      this.y += config.PLAYER.SPEED;
    }
    
    this.ensureIsInField();
  }
  
  return new HumanPlayer();
});