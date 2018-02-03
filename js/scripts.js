var inputs = [2,5,9];


function runElevator(inputs){
  var j = 0;
  for (var i = 1; i <= inputs[2]; i++)
  {
    if (inputs.includes(i)){
      console.log("go through inputs code");
      console.log("Stopping on floor" + inputs[j]);
      j++;
    }
    else {
    console.log("Passing floor" + i);
    }
  }
}

runElevator(inputs);
