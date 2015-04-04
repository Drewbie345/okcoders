JavaScript Review
=================

1. Consider the following **if statement**...

````js
if (color === 'blue') {
  alert('Blue is awesome!');
}
````
  * What would be alerted if the color variable was 'blue'?
  * What would be alerted if the color variable was 'yellow'?
  * Add an **if/else statement** so that a string will be alerted no matter what the color is picked.

2. Consider the following **if/else if statement**...

````js
if (x < 5) {
  alert('What a small number!');
} else if (x >= 5) {
  alert('What a large number');
} else {
  alert('What a number!');
}
````
  * What would be alerted if the x variable was 3?
  * What would be alerted if the x variable was 5?
  * What would be alerted if the x variable was 7?
  * Assuming that the x variable was a number, when would the `alert('What a number!')` run?
  * Based on your answer to the last question, tweak the **if/else if statement** so that all three alerts have the potential to run.

3. Consider the following **for loop**...

````js
for (var i = 0; i < 10; i++) {
  console.log('i = ' + i);
  i++;
}
````
  * In your own words, explain how the **for loop** works.
  * Before running the code in your browser console, predict what will be printed out in the console.
  * Write your own **for loop** that prints out multiples of 5.

4. Consider the following **while loop**...

````js
while (i < 10) {
  console.log('i = ' + i);
  i++;
}
````
  * In your own words, explain how the **while loop** works.
  * Before running the code in your browser console, predict what will be printed out in the console.
  * Write your own **while loop** that prints out the alphabet.