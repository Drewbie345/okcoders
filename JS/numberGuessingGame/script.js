var secretNumber = parseInt(Math.random() * 100, 10) + 1;
console.log(secretNumber);

var numberGuesser = function() {
  var num = prompt('Pick a number between 1 & 100');
  
  if (num !== NaN) {
    if (num == secretNumber) {
      alert('Congrats, you guessed the number!');
    }

    if (num > secretNumber) {
      alert('You guessed too high!');
      numberGuesser();
    }

    if (num < secretNumber) {
      alert('You guessed too low!');
      numberGuesser();
    }
  } else {
    alert('Please pick a number!');
    numberGuesser();
  }
}

numberGuesser();