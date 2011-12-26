define(["./config", "./player"], function(config, Player) {
  
  /**
   * Basic class constructor.
   */
  function NpcPlayer() {
    this.x = 10;
  }
  
  /**
   * Inherits from player.
   */
  NpcPlayer.prototype = new Player();
  
  /**
   * Updates the player position.
   *
   * @param {Object} ball The ball object, with it we are able to get direction and position of the ball.
   *
   * @return void
   */
  NpcPlayer.prototype.update = function(ball) {
    var ball_pos = ball.getPosition();
    if (Math.abs(this.y + this.height / 2 - ball_pos.y) > config.PLAYER.SPEED) {
      if (this.y + this.height / 2 > ball_pos.y) {
        this.y -= config.PLAYER.SPEED;
      } else if (this.y + this.height / 2 < ball_pos.y) {
        this.y += config.PLAYER.SPEED;
      }
      this.ensureIsInField();
    }
  }
  
  return NpcPlayer;
});