var Board = require("./board.js");
function Game(readerInterface){
  this.reader = readerInterface;
  this.board = new Board();
  this.player1 = "O";
  this.player2 = "X";
  this.turn = 1;
}

Game.prototype.run = function(completionCallback) {
  // console.log(this.board.won());
  if(this.board.won()){
    completionCallback();
  }else{

    (this.turn === 1) ? this.turn = 2 : this.turn = 1;
    this.board.display();
    this.prompt(completionCallback);
  }
};

Game.prototype.prompt = function(completionCallback) {
  var that = this;
  this.reader.question("Where do you want to move", function(move) {
    if (that.board.placeMark(move, that.playerTurn())){
      that.run(completionCallback)
    }else{
      console.log("bad move, try again.");
      that.prompt(completionCallback);
    }

  })
};

Game.prototype.playerTurn = function() {
  if (this.turn === 1) {
    return this.player1;
  } else {
    return this.player2;
  }
};



module.exports = Game;
