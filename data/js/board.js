define(["./config"], function(config) {
  
  /**
   * Basic class constructor.
   */
  function Board() {
    var canvas_element = $("<canvas width='" + config.CANVAS.WIDTH + "' height='" + config.CANVAS.HEIGHT + "' style='background-color:black'></canvas>");
    canvas_element.appendTo('body');
    this.canvas = canvas_element.get(0).getContext("2d");
  }
  
  /**
   * Returns the boards canvas.
   *
   * @return {Object} The canvas object.
   */
  Board.prototype.getCanvas = function() {
    return this.canvas;
  }

  /**
   * Clears the board
   *
   * @return void
   */
  Board.prototype.clear = function() {
    this.canvas.clearRect(0, 0, config.CANVAS.WIDTH, config.CANVAS.HEIGHT);
  }

  /**
   * Draws the score on the board.
   *
   * @param {Object} score A score object containing a value for left and right.
   *
   * @return void
   */
  Board.prototype.drawScore = function(score) {
    this.canvas.font = "80px Helvetica, Arial";
    this.canvas.fillText(score.left, config.CANVAS.WIDTH / 4, 100);
    this.canvas.fillText(score.right, config.CANVAS.WIDTH * 3 / 4 - 30, 100);
  }
  
  return new Board();

});