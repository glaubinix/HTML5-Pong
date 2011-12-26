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
  HumanPlayer.prototype.update = function(board) {
    if (keydown.up) {
      this.y -= Math.ceil(config.PLAYER.SPEED * board.getHeightFactor());
    } else if (keydown.down) {
      this.y += Math.ceil(config.PLAYER.SPEED * board.getHeightFactor());
    }
    
    this.ensureIsInField(board);
  }
  
  return HumanPlayer;
});