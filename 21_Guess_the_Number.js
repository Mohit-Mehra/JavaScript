// Write a program to generate a random number and store it in a variable. The program then takes an input from
// the user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - (no. of guesses) is the score of the user. The Program is expected to terminate once the number is 
// guessed. Number should br between 1 - 100.
let number = Math.floor((Math.random() * 100) + 1); // Generates a random number b/w 1 and 100
let chances = 0; // Initial vaulue of chances taken to guess a number
let guess; // Variable to store the number to be input from user to be guessed

console.log("This is a guessing game and you have to enter a number and if it matches with the number generated by computer, then you win...\n");
guess = prompt("Enter a number between 1 and 100");
++chances; // To increment the number of chances taken

do {
  guess = Number.parseInt(guess);

  if (guess > number) {
    console.log("Number entered is greater");
    guess = prompt("Enter again!!");
    guess = Number.parseInt(guess);
    ++chances; // To increment the number of chances taken
    continue;
  }

  else if (guess < number) {
    console.log("Number entered is smaller");
    guess = prompt("Enter again!!");
    guess = Number.parseInt(guess);
    ++chances; //To increment the number of chances taken
    continue;
  }

} while (guess != number); //break the loop if number entered is equal to the number generated

let score = 100 - chances; //To store the score of your game
console.log("\nCongratulations🥳🥳\nThe number generated was", number + " and you guessed it right😁\nYour final score is", score);