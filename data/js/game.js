define(['require', './config', './npcplayer', './humanplayer', './board', './ball'], function(require, config, NpcPlayer, HumanPlayer) {

  /*
   * Basic class constructor.
   */
  function Game() {
    this.board = require('./board');
    this.ball = require('./ball');
    this.players = [];
    player1 = new NpcPlayer();
    player2 = new HumanPlayer();
    this.players.push(player1);
    this.players.push(player2);
    this.score = {
      left: 0,
      right: 0
    }
  }
  
  /**
   * Game update function, updates all the games elements.
   *
   * @return void
   */
  Game.prototype.update = function() {
    var that = this;
    this.players.forEach(function(player) {
      player.update(that.board, that.ball);
    });
    var result = this.ball.update(this.board, this.players);
    if (result !== undefined) {
      this.updateScore(result);
      this.ball.reset(this.board, result);
    }
  }
  
  /**
   * Game drawing function, draws all the elements onto the canvas.
   *
   * @return void
   */
  Game.prototype.draw = function() {
    var that = this;
    this.board.clear();
    this.board.drawScore(this.score);
    this.players.forEach(function(player) {
      player.draw(that.board);
    });
    this.ball.draw(this.board);    
  }
  
  /**
   * Updates the score board
   *
   * @return void
   */
  Game.prototype.updateScore = function(result) {
    if (result === "left") {
      this.score.right += 1;
    } else {
      this.score.left += 1;
    }
  }
  
  return Game;
});