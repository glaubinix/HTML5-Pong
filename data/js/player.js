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
    board.getCanvas().fillRect(this.getX(board), this.y, this.getWidth(board), this.getHeight(board));
  }

  /**
   * Ensures that the player cant leave the board.
   *
   * @param {Object} board The board the player is playing on.
   *
   * @return void
   */
  Player.prototype.ensureIsInField = function(board) {
    this.y = Math.max(Math.min(this.y, board.getCanvas().canvas.height - this.getHeight(board)), 0);
  }

  /**
   * Returns the players height.
   *
   * @param {Object} board The board the player is playing on.
   *
   * @return {Number} The player height.
   */
  Player.prototype.getHeight = function(board) {
    return this.height * board.getHeightFactor();
  }

  /**
   * Returns the players width.
   *
   * @param {Object} board The board the player is playing on.
   *
   * @return {Number} The players width.
   */
  Player.prototype.getWidth = function(board) {
    return this.width * board.getWidthFactor();
  }

  /**
   * Returns the players x positions.
   *
   * @param {Object} board The board the player is playing on.
   *
   * @return {Number} The players current x positions.
   */
  Player.prototype.getX = function(board) {
    return this.x * board.getWidthFactor();
  }

  /**
   * Returns the players speed i.e. the amount of pixels he can move per frame.
   *
   * @param {Object} board The board the player is playing on.
   *
   * @return {Number} The playerspeed.
   */
  Player.prototype.getSpeed = function(board) {
    return config.PLAYER.SPEED * board.getHeightFactor();
  }

  return Player;
});