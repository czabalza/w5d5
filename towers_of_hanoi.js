var readline = require('readline');
var count = 0
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[1],[],[2,3]];
}

HanoiGame.prototype.isWon = function() {
  if (JSON.stringify(this.stacks[2]) === JSON.stringify([1, 2, 3])) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  if (this.stacks[endTowerIdx][0] === undefined ||
      this.stacks[startTowerIdx][0] < this.stacks[endTowerIdx][0]) {
        return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function(startIdx, endIdx) {

  if(this.isValidMove(startIdx, endIdx)) {
    this.stacks[endIdx].unshift(this.stacks[startIdx].shift());
    return true;
  } else {
    console.log("Cant move here");
    return false;
  }
};
HanoiGame.prototype.print =  function(){
  console.log(JSON.stringify(this.stacks));
};
HanoiGame.prototype.promptMove = function(callback){
  var that = this;
  this.print();
  reader.question("Where do you want to move from?",function(ans1){
    reader.question("Where do you want to move to?", function(ans2){
      callback(ans1, ans2);
      that.run(completionCallback);
    });
  });

};

HanoiGame.prototype.run = function(completionCallback){
  if(this.isWon()){
    completionCallback();
  }
  this.promptMove(this.move.bind(this));
};

function completionCallback(){
  console.log("you win!");
  reader.close();
}

var game = new HanoiGame();
game.run();
