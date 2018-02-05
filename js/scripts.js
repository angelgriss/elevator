//this branch assumes a student will offer inputs as separate variables instead of an array
function runElevator(inputs){

  inputs.sort();
  var resultsArray = [];
  var j = 0;

  if (inputs[0] == 0 || inputs.includes("") || inputs.includes(NaN)) {
    resultsArray.push("invalid number entered - please try again");
  }
  else {
    for (var i = 1; i <= inputs[inputs.length-1]; i++) //because array was sorted first, last index will always be highest number.
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
    $("#resultsList").text(""); //reset
    event.preventDefault();
    var inputs = [];
    $('[name=floor]:checked').each(function() {
      inputs.push(parseInt($(this).val()));
    });

      var resultsArray = runElevator(inputs);
      resultsArray.forEach(function(result){
        $("#resultsList").append("<li>" + result + "</li>");
      });
  });
});
