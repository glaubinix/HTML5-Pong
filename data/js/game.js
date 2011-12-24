define(['require', './config', './player', './humanplayer', './board', './ball'], function(require, config) {

  setInterval(function() {
    update();
    draw();
  }, 1000 / config.BOARD.FPS);
  
  var board = require('./board');
  var ball = require('./ball');

  var player = require('./player');
  var player2 = require('./humanplayer');
  var players = [];
  players.push(player);
  players.push(player2);
  var update = function update() {
    //player.update();
    ball.update(players);
  };
  var draw = function draw() {
    board.clear();
    players.forEach(function(player) {
      player.draw(board.getCanvas());
    });
    ball.draw(board.getCanvas());
  }

});