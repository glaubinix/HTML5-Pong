define(["./config"], function(config) {

  /**
   * Basic class constructor.
   */
  function Player() {
    this.width = config.PLAYER.WIDTH;
    this.height = config.PLAYER.HEIGHT;
    this.color = config.PLAYER.COLOR;
    this.x = 10;
    this.y = config.CANVAS.HEIGHT / 2 - this.height / 2;
  }

  /**
   * Draw the player on to the canvas.
   *
   * @param {String} canvas The canvas you wont the player to draw on.
   *
   * @return void
   */
  Player.prototype.draw = function(canvas) {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }

  /**
   * Ensures that the player cant leave the board.
   *
   * @return void
   */
  Player.prototype.ensureIsInField = function() {
    this.y = Math.max(Math.min(this.y, config.CANVAS.HEIGHT - this.height), 0);
  }

  return new Player();
});