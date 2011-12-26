define(["./config"], function(config) {

  /**
   * Basic class constructor.
   */
  function Player() {
    this.width = config.PLAYER.WIDTH;
    this.height = config.PLAYER.HEIGHT;
    this.color = config.PLAYER.COLOR;
    this.x = config.PLAYER.MARGIN;
    this.y = config.CANVAS.HEIGHT / 2 - this.height / 2;
  }

  /**
   * Draw the player on to the canvas.
   *
   * @param {String} board The board you wont the player to draw on.
   *
   * @return void
   */
  Player.prototype.draw = function(board) {
    board.getCanvas().fillStyle = this.color;
    board.getCanvas().fillRect(this.x * board.getWidthFactor(), this.y, this.width * board.getWidthFactor(), this.height * board.getHeightFactor());
  }

  /**
   * Ensures that the player cant leave the board.
   *
   * @return void
   */
  Player.prototype.ensureIsInField = function(board) {
    this.y = Math.max(Math.min(this.y, board.getCanvas().canvas.height - this.height * board.getHeightFactor()), 0);
  }

  return Player;
});