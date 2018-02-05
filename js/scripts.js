//this branch assumes a student will offer inputs as separate variables instead of an array
function runElevator(inputs){

  inputs.sort();
  var resultsArray = [];
  var j = 0;

  if (inputs[0] == 0 || inputs.includes("") || inputs.includes(NaN)) {
    resultsArray.push("invalid number entered - please try again");
  }
  else {
    for (var i = 1; i <= inputs[2]; i++) //this works for an array with max index 2 that has been sorted.
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
  return resultsArray;
}
$(document).ready(function(){
  $("#floorsToStop").submit(function(){
    $("#resultsList").text("");
    event.preventDefault();

    var firstFloorToStop = parseInt($("#firstFloor").val());
    var secondFloorToStop = parseInt($("#secondFloor").val());
    var thirdFloorToStop = parseInt($("#thirdFloor").val());
    var inputs = [firstFloorToStop,secondFloorToStop,thirdFloorToStop]; 
    var resultsArray = runElevator();
    resultsArray.forEach(function(result){
      $("#resultsList").append("<li>" + result + "</li>");
    });
  });
});


//account for 0? No - elevators don't do that.
//account for negative numbers? No.
//account for submitting only two floors - this breaks it.
