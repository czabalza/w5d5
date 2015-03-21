
function Board(){
  this.board = [[undefined, undefined, undefined],
                [undefined, undefined, undefined],
                [undefined, undefined, undefined]];
  this.winner = null;
}

Board.prototype.won = function(){
  for (var i = 0; i < this.board.length; i++){
    if (this.board[i][0] !== undefined && this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2]){
          this.winner = this.board[i][1];
          return true;
    }else if(this.board[0][i] !== undefined &&
             this.board[0][i] === this.board[1][i] &&
                 this.board[1][i] === this.board[2][i]){
     this.winner = this.board[1][i];
     return true;
      }
    }
  if(this.board[0][0] !== undefined &&
     this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2]){
    this.winner = this.board[1][1];
    return true;
  }
  if(this.board[0][2] !== undefined &&
     this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0]){
    this.winner = this.board[1][1];
    return true;
  }
  return false;
};

Board.prototype.winner = function(){
  if(this.won){
    return this.winner;
  }
};

Board.prototype.empty = function(pos){

  if(this.board[pos[0]][pos[1]] === undefined){
    return true;
  }else{
    return false;
  }

};

Board.prototype.placeMark = function(pos, mark){
  // console.log(this.board["12"[0]]);
  // this.display();
  if (this.empty(pos)) {
    this.board[pos[0]][pos[1]] = mark;
    return true;
  } else {
    return false;
  }
};

Board.prototype.display = function() {
  for (var i = 0; i < this.board.length; i++) {
    console.log(this.board[i]);
  }
};

module.exports = Board;
