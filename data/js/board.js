define(["./config"], function(config) {
  
  function Board() {
    var canvas_element = $("<canvas width='" + config.CANVAS.WIDTH + "' height='" + config.CANVAS.HEIGHT + "' style='background-color:black'></canvas>");
    canvas_element.appendTo('body');
    this.canvas = canvas_element.get(0).getContext("2d");
  }
  
  Board.prototype.getCanvas = function() {
    return this.canvas;
  }

  Board.prototype.clear = function() {
    this.canvas.clearRect(0, 0, config.CANVAS.WIDTH, config.CANVAS.HEIGHT);
  }
  
  return new Board();

});