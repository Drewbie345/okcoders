JavaScript Solutions for Activity #1
====================================

1. Write a JavaScript program that prompts the user twice – one for their first name, and one for their last name – and alerts a greeting with both names in the message.

SOLUTION:
````js
  var firstName = prompt("What's your first name?");
  var lastName = prompt("What's your last name?");

  alert("Good Morning, " + firstName + " " + lastName);
  
````

2. Write a JavaScript program that prompts the user for a string and alerts that string in all uppercase letters.

SOLUTION:
````js
  var string = prompt("Type a word!");
  alert(string.toUpperCase());

````

3. Write a JavaScript program that prompts the user twice – one for their first name, and one for their last name – and alerts a greeting with both names in the message, with their last name in all uppercase.

SOLUTION:
````js
  var firstName = prompt("What's your first name?");
  var lastName = prompt("What's your last name?");

  alert("Good Morning, " + firstName + " " + lastName.toUpperCase());

````

4. Write a JavaScript program that prompts the user for a number:

  * If the number is divisible by 7, alert a lucky message.

  * If the number is even, alert that they are an even steven.
  
  * HINT: try googling 'javascript check if number is even' and use the same technique you find for divisible by 7.

SOLUTION:
````js
  var number = prompt("Pick a number!");

  if (number % 7 === 0) {
    alert("You're lucky!");
  } else if (number % 2 === 0) {
    alert("You're an even steven!");
  } else {
    alert("Better luck next time!");
  }
````

5. EXTENSION: Write a simplified restaurant reservation directory. See instructions below.

  * Assign three variables to three different names (We'll call each of these a reservation).

  * Prompt the user for a name.

  * If the name is a reservation, welcome the user and mark the reservation as claimed.

  * If the name is a claimed reservation, tell the user that reservation has already been taken.

  * Otherwise, tell the user they need to make a reservation.

SOLUTION:
````js
var reservation1 = 'Alice';
var reservation2 = 'Bob';
var reservation3 = 'Chris';

var reservation1_claimed = null;
var reservation2_claimed = null;
var reservation3_claimed = null;

while (true) {
  var name = prompt('What is your name?');

  if (name === reservation1) {
    if (reservation1_claimed === null) {
      reservation1_claimed = true;
      alert('Welcome ' + reservation1);
    } else {
      alert('Oops! This reservation has already been claimed!');
    }

  } else if (name === reservation2) {
    if (reservation2_claimed === null) {
      reservation2_claimed = true;
      alert('Welcome ' + reservation2);
    } else {
      alert('Oops! This reservation has already been claimed!');
    }
  } else if (name === reservation3) {
    if (reservation3_claimed === null) {
      reservation3_claimed = true;
      alert('Welcome ' + reservation3);
    } else {
      alert('Oops! This reservation has already been claimed!');
    }
  } else {
    alert('You do not have a reservation! You will need to make one!');
  }

  if (name === 'exit') {
    // This breaks out of the while loop
    break;
  }
}
````


