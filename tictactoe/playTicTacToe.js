var Index = require('./index.js');


var readlines = require('readline');
var reader = readlines.createInterface({
  input: process.stdin,
  output: process.stdout
});
var game = new Index.Game(reader);
var completionCallback = function(){
  console.log(this.board.winner + " is the winner");
  this.board.display();
  reader.close();
};

game.run(completionCallback.bind(game));
