define(["./config"], function(config) {

  /**
   * Basic class constructor.
   */
  function Board() {
    var canvas_element = $("<canvas width='" + window.innerWidth + "' height='" + window.innerHeight + "' style='background-color:black'></canvas>");
    canvas_element.appendTo('body');
    this.canvas = canvas_element.get(0).getContext("2d");
    this.canvas.font = Math.ceil(config.BOARD.SCORE.FONT_SIZE * this.getHeightFactor()) + "px Monaco, Helvetica, Arial";
    var that = this;
    that.resizeTimer;
    $(window).resize(function() {
      clearTimeout(that.resizeTimer);
      that.resizeTimer = setTimeout(function() {
        that.resize(window.innerWidth, window.innerHeight);
      }, 200);
    });
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
    this.canvas.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
  }

  /**
   * Draws the score on the board.
   *
   * @param {Object} score A score object containing a value for left and right.
   *
   * @return void
   */
  Board.prototype.drawScore = function(score) {
    this.canvas.fillText(score.left, this.canvas.canvas.width / 4, config.BOARD.SCORE.MARGIN_TOP * this.getHeightFactor());
    this.canvas.fillText(score.right, this.canvas.canvas.width * 3 / 4, config.BOARD.SCORE.MARGIN_TOP * this.getHeightFactor());
  }

  /**
   * Resizes the board, sets new height and width for the canvas and the font size.
   *
   * @param {Number} width The new board width.
   * @param {Number} height The new board height.
   *
   * @return void
   */
  Board.prototype.resize = function(width, height) {
    this.canvas.canvas.width = width;
    this.canvas.canvas.height = height;
    this.canvas.font = Math.ceil(config.BOARD.SCORE.FONT_SIZE * this.getHeightFactor()) + "px Monaco, Helvetica, Arial";
  }

  /**
   * Returns the current height factor i.e. the factor to multiple all elements to fit the current board size.
   *
   * @return {Number} The height factor.
   */
  Board.prototype.getHeightFactor = function() {
    return this.canvas.canvas.height / config.CANVAS.HEIGHT;
  }

  /**
   * Returns the current width factor i.e. the factr to multiple all elements to fit the current board size.
   *
   * @return {Number} The width factor.
   */
  Board.prototype.getWidthFactor = function() {
    return this.canvas.canvas.width / config.CANVAS.WIDTH;
  }

  return new Board();

});