define(['require', './config', './npcplayer', './humanplayer', './board', './ball'], function(require, config) {

  function Game() {
    this.board = require('./board');
    this.ball = require('./ball');
    this.players = [];
    player1 = require('./npcplayer');
    player2 = require('./humanplayer');
    this.players.push(player1);
    this.players.push(player2);
    this.score = {
      left: 0,
      right: 0
    }
  }
  
  Game.prototype.update = function() {
    this.players.forEach(function(player) {
      player.update();
    });
    var result = this.ball.update(this.players);
    if (result !== undefined) {
      this.updateScore(result);
      this.ball.reset(result);
    }
  }
  
  Game.prototype.draw = function() {
    var that = this;
    this.board.clear();
    this.board.drawScore(this.score);
    this.players.forEach(function(player) {
      player.draw(that.board.getCanvas());
    });
    this.ball.draw(this.board.getCanvas());    
  }
  
  Game.prototype.updateScore = function(result) {
    if (result === "left") {
      this.score.right += 1;
    } else {
      this.score.left += 1;
    }
  }
  
  var game = new Game();
  setInterval(function() {
    game.update();
    game.draw();
  }, 1000 / config.BOARD.FPS);

});