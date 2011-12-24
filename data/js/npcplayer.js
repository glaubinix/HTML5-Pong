define(["./config", "./player"], function(config) {
  
  /**
   * Inherit from player.
   */
  NpcPlayer.prototype = require('./player');
  
  /**
   * Basic class constructor.
   */
  function NpcPlayer() {
    this.x = 10;
  }
  
  /**
   * Updates the player position.
   *
   * @return void
   */
  NpcPlayer.prototype.update = function() {
    this.ensureIsInField();
  }
  
  return new NpcPlayer();
});