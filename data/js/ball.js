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
  Ball.prototype.update = function(players) {
    this.x += this.direction.x;
    this.y += this.direction.y;
    
    /* check score */
    if (this.x <= 0 || this.x >= config.CANVAS.WIDTH) {
      return this.x <= 0 ? "left" : "right";
    }
    
    /* check wall collision */
    if (this.y - this.radius <= 0 || this.y + this.radius >= config.CANVAS.HEIGHT) {
      this.direction.y *= -1;
    }
    
    /* check player collision */
    if (this.direction.x < 0) {
      if (this.x - this.radius <= players[0].x + players[0].width) {
        if (this.y > players[0].y && this.y < players[0].y + players[0].height) {
          this.direction.x *= -1;
        }
      }
    } else {
      if (this.x + this.radius >= players[1].x) {
          if (this.y > players[1].y && this.y < players[1].y + players[1].height) {
            this.direction.x *= -1;
          }
        }
    }
  }

  /**
   * Draws the ball on the canvas.
   *
   * @param {String} canvas The canvas you want the ball to draw on.
   *
   * @return void
   */
  Ball.prototype.draw = function(canvas) {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    canvas.fillStyle = config.BALL.COLOR;
    canvas.fill();
  }

  Ball.prototype.reset = function(result) {
    this.x = config.CANVAS.WIDTH / 2;
    this.y = config.CANVAS.HEIGHT / 2;
    this.direction = {
      x: result === "left" ? -config.BALL.SPEED : config.BALL.SPEED,
      y: 0
    };
  }

  return new Ball();
});