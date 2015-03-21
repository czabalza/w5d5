Function.prototype.myBind = function(context){
  var fn = this;
  return function(){
    return fn.apply(context);
  };
};

function test() {
  console.log(JSON.stringify(this));
}

var num = "adfas";
var testFun = test(num).myBind;
testFun();
