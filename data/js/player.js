define(["./config"], function(config) {

  /**
   * 
   *
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
   * Updates the player position.
   *
   * @return void
   */
  Player.prototype.update = function() {
    /*if (keydown.up) {
      this.y += config.PLAYER_SPEED;
    } else if (keydown.down) {
      this.y -= config.PLAYER_SEED;
    }*/
    // check that player cant leave the baord
  }

  return new Player();
});