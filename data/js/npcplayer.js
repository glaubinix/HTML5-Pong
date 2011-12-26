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
   * @param {Object} board The board the player is moving on.
   * @param {Object} ball The ball object, with it we are able to get direction and position of the ball.
   *
   * @return void
   */
  NpcPlayer.prototype.update = function(board, ball) {
    var ball_pos = ball.getPosition();
    if (Math.abs(this.y + this.getHeight(board) / 2 - ball_pos.y) > this.getSpeed(board)) {
      if (this.y + this.getHeight(board) / 2 > ball_pos.y) {
        this.y -= this.getSpeed(board);
      } else if (this.y + this.getHeight(board) / 2 < ball_pos.y) {
        this.y += this.getSpeed(board);
      }
      this.ensureIsInField(board);
    }
  }

  return NpcPlayer;

});