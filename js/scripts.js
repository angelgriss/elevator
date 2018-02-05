//this branch assumes a student will offer inputs as separate variables instead of an array
function runElevator(firstFloorToStop, secondFloorToStop, thirdFloorToStop){

  var inputs = [firstFloorToStop, secondFloorToStop, thirdFloorToStop];
  var resultsArray = [];
  var j = 0;
  inputs.sort();
  if (checkArray(inputs)){
    for (var i = 1; i <= inputs[2]; i++)
    {
      if (inputs.includes(i)){
        resultsArray.push("Door open on floor: " + inputs[j]);
        j++;
      }
      else {
        resultsArray.push("Passing floor: " + i);
      }
    }
    resultsArray.push("Returning to lobby.");
    }
    {
      resultsArray.push("Invalid number entered.");
    }
  return resultsArray;
}

function checkArray(inputs){
  if(inputs[0] == 0 || inputs[2] == NaN){
  return false;
  }
}
$(document).ready(function(){
  $("#floorsToStop").submit(function(){
    $("#resultsList").text("");
    event.preventDefault();

    var firstFloorToStop = parseInt($("#firstFloor").val());
    var secondFloorToStop = parseInt($("#secondFloor").val());
    var thirdFloorToStop = parseInt($("#thirdFloor").val());
    var resultsArray = runElevator(firstFloorToStop, secondFloorToStop, thirdFloorToStop);
    resultsArray.forEach(function(result){
      $("#resultsList").append("<li>" + result + "</li>");
    });
  });
});


//account for 0? No - elevators don't do that.
//account for negative numbers? No.
//account for submitting only two floors - this breaks it.
