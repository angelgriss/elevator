Elevator

Every day, on your way to class, you use the elevator in the Epicodus building. Have you ever considered that someone had to write the program that makes the elevator run correctly? Think about it: the way the elevator goes from floor to floor seems a lot like a loop. And on each floor it has to make a decision: Doors open or closed? That sounds a lot like branching.

Create a web application that simulates the kind of programming that makes an elevator run. Start with the simple scenario outlined below, and add on as many further explorations as you can with any time you have remaining.

Starting scenario:

* Your elevator runs in a building that has exactly 9 floors.
* Your elevator always starts running from the lobby.
* All passengers enter the lobby at the same time.
* All passengers enter the floor they wish to exit _**in sequence**_
* No floor is entered more than once.
* When the elevator stops a floor where a passenger needs to exit, the following text is displayed: "Doors open on floor: x"
* When the elevator passes a floor where no passenger needs to exit, the following text is displayed: "Passing floor: x"
* After its last stop, the elevator returns to the lobby.
* There are no floors below the lobby. (How can you rule out user inputs of '0' and '1'?)
* Passengers can not go down, only up.

Output the floors passed and opened doors in a nicely formatted list. You may accept input any way you like, but be smart and use the UI to your advantage.

Sample output for an input of [3,5,7]:

* Passing floor: 1
* Passing floor: 2
* Doors open on floor: 3
* Passing floor: 4
* Doors open on floor: 5
* Passing floor: 6
* Doors open on floor: 7
* Returning to lobby

### Tips:

* Do not build a frontend until you have working logic. Test your logic in the browser JS console or JSfiddle.
* Make your app work with a fixed set of inputs before you accept user input.
* Use built in functions you have learned about this week to your advantage, such as `.includes()` and, if need be, `.sort()`. [There are many more functions that might also be helpful](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype).


## Further Exploration

1. Account for floor inputs being entered out of sequence: [3, 7, 5] should still make the elevator stop as above.
2. Account for buildings higher than 9 floors. (Note: Sorting numbers in JS above 9 [is not as straightforward as you might think.](http://www.javascriptkit.com/javatutors/arraysort.shtml) )
3. Account for more or less than 3 floors being entered.
4. Account for the same floor button being pushed more than once.
5. Account for passengers to get on the elevator above lobby level.
6. Account for passengers wanting to go down. Add a basement level to your building.
7. Work with timers to pause on floors where the doors are open.
8. Implement a elevator themed UI.
9. Play a sound as floors are passed, another when the elevator stops.

## Specs

Sample Spec:
<pre>
 Behaviour                           | Input   | Output                 |
------------------------------------+---------+------------------------|
 Elevator stops on lowest floor     | [1,3,4] | Doors open on floor: 1 |
 Elevator passes floors not entered | [2,3,4] | Passing floor: 1, Doors open on floor: 2 |
</pre>
 etc.

 ## Objectives

* JavaScript business logic and user interface logic are separate.
* Variable names are descriptive and use lower camel case (e.g. myVariableExample).
* Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.
* Application implements at least one for loop or for each loop
* Application implements at least one array.
* Application works as expected.
* All previous objectives have been met.
* Logic is broken down into "plain English" specs, listed in README.
* Project is in a presentable, portfolio-quality state.
* Required functionality is in place by Friday deadline.
* Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.
