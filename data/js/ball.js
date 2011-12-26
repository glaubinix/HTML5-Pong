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
      if (this.x - this.radius <= players[0].x * board.getWidthFactor() + players[0].width * board.getWidthFactor()) {
        if (this.y + this.radius > players[0].y && this.y - this.radius < players[0].y + Math.ceil(players[0].height * board.getHeightFactor())) {
          var pos = this.y - players[0].y - Math.ceil(players[0].height * board.getHeightFactor()) / 2;
          this.direction.x = config.BALL.SPEED * Math.cos(Math.PI * pos / Math.ceil(players[0].height * board.getHeightFactor()));
          this.direction.y = config.BALL.SPEED * Math.sin(Math.PI * Math.min(pos / Math.ceil(players[0].height * board.getHeightFactor()), 0.8));
        }
      }
    } else {
      if (this.x + this.radius >= players[1].x * board.getWidthFactor()) {
          if (this.y > players[1].y && this.y < players[1].y + Math.ceil(players[0].height * board.getHeightFactor())) {
            var pos = this.y - players[1].y - Math.ceil(players[0].height * board.getHeightFactor()) / 2;
            this.direction.x = -config.BALL.SPEED * Math.cos(Math.PI * pos / Math.ceil(players[0].height * board.getHeightFactor()));
            this.direction.y = config.BALL.SPEED * Math.sin(Math.PI * Math.min(pos / Math.ceil(players[0].height * board.getHeightFactor()), 0.8));
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

  Ball.prototype.reset = function(board, result) {
    this.x = board.getCanvas().canvas.width / 2;
    this.y = board.getCanvas().canvas.height / 2;
    this.direction = {
      x: result === "left" ? -config.BALL.SPEED : config.BALL.SPEED,
      y: 0
    };
  }
  
  Ball.prototype.getPosition = function() {
    return position = {
      x: this.x,
      y: this.y
    };
  }

  return new Ball();
});