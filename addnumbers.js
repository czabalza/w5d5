var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Enter a number.", function(num1){
      var num = parseInt(num1);
      sum += num;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else if(numsLeft === 0){
    completionCallback(sum);
  }
}

var completionCallback = function completionCallback(sum){
  console.log(sum);
};

addNumbers(0, 3, completionCallback);
