define(["./config", "./player"], function(config, Player) {
  
  /**
   * Basic class constructor.
   */
  function HumanPlayer() {
    this.x = config.CANVAS.WIDTH - this.width - 10;
  }
  
  /**
   * Inherits from player.
   */
  HumanPlayer.prototype = new Player();
  
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
  
  return HumanPlayer;
});