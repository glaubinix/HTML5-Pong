define(['./config'], function(config) {

  /**
   * Basic class constructor.
   */
  function Ball() {
    this.x = config.CANVAS.WIDTH / 2;
    this.y = config.CANVAS.HEIGHT / 2;
    this.radius = config.BALL.RADIUS;
    this.direction = {
      x: -config.BALL.SPEED,
      y: 0
    };
  }

  /**
   * Updates the balls status
   *
   * @param {Object} board The board the ball is moving on.
   * @param {Array} players An array of player objects we need to compare whether the ball hits a player.
   *
   * @return void
   */
  Ball.prototype.update = function(board, players) {
    this.x += this.direction.x;
    this.y += this.direction.y;
    var canvas = board.getCanvas();
    /* check score */
    if (this.x <= 0 || this.x >= canvas.canvas.width) {
      return this.x <= 0 ? "left" : "right";
    }
    
    /* check wall collision */
    if (this.y - this.radius <= 0) {
      if (this.direction.y < 0) {
        this.direction.y *= -1; 
      }
    } else if (this.y + this.radius >= canvas.canvas.height) {
      if (this.direction.y > 0) {
        this.direction.y *= -1; 
      }
    }
    
    /* check player collision */
    if (this.direction.x < 0) {
      if (this.x - this.radius <= players[0].getX(board) + players[0].getWidth(board)) {
        if (this.y + this.radius > players[0].y && this.y - this.radius < players[0].y + players[0].getHeight(board)) {
          var pos = this.y - players[0].y - players[0].getHeight(board) / 2;
          this.direction.x = config.BALL.SPEED * Math.cos(Math.PI * pos / players[0].getHeight(board));
          this.direction.y = config.BALL.SPEED * Math.sin(Math.PI * Math.min(pos / players[0].getHeight(board), 0.8));
        }
      }
    } else {
      if (this.x + this.radius >= players[1].getX(board)) {
          if (this.y > players[1].y && this.y < players[1].y + players[0].getHeight(board)) {
            var pos = this.y - players[1].y - players[0].getHeight(board) / 2;
            this.direction.x = -config.BALL.SPEED * Math.cos(Math.PI * pos / players[0].getHeight(board));
            this.direction.y = config.BALL.SPEED * Math.sin(Math.PI * Math.min(pos / players[0].getHeight(board), 0.8));
          }
        }
    }
  }

  /**
   * Draws the ball on the canvas.
   *
   * @param {Object} board The canvas you want the ball to draw on.
   *
   * @return void
   */
  Ball.prototype.draw = function(board) {
    var canvas = board.getCanvas();
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    canvas.fillStyle = config.BALL.COLOR;
    canvas.fill();
  }

  /**
   * Resets the ball to its origin to restart the game after someone scored.
   *
   * @param {Obejct} board The board the ball is moving on.
   * @param {String} result The result string indicating on which side the ball was out.
   *
   * @return void
   */
  Ball.prototype.reset = function(board, result) {
    this.x = board.getCanvas().canvas.width / 2;
    this.y = board.getCanvas().canvas.height / 2;
    this.direction = {
      x: result === "left" ? -config.BALL.SPEED : config.BALL.SPEED,
      y: 0
    };
  }

  /**
   * Returns the balls current position.
   *
   * @return {Object} Obejct containing x and y position of the ball.
   */
  Ball.prototype.getPosition = function() {
    return position = {
      x: this.x,
      y: this.y
    };
  }

  return new Ball();

});