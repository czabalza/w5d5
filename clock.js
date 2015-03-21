
function Clock() {
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
}
Clock.prototype.run = function(){
  var date = new Date();
  this.seconds = date.getSeconds();
  this.minutes = date.getMinutes();
  this.hours = date.getHours();
  setInterval(this.tick.bind(this), 5000);
};

Clock.prototype.tick = function(){
  if(this.seconds + 5 < 60){
    this.seconds += 5;
  } else {
    var remainder = (this.seconds + 5) % 60;
    this.seconds = remainder;
    if (this.minutes + 1 === 60){
      this.minutes = 0;
      if (this.hours + 1 === 24) {
        this.hours = 0;
      }
    } else {
      this.minutes += 1;
    }
  }
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

var clock = new Clock();
clock.run();
