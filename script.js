let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = (min, max) => {
    return Math.floor(Math.random() * (9 - 0) + 0);
  }

  // Log Generate Target
  console.log(generateTarget());

const compareGuesses = (userGuess, comGuess, secretGuess) => {

    if (Math.abs(userGuess - secretGuess) < Math.abs(comGuess - secretGuess)) {
        return true
    } else if (Math.abs(comGuess - secretGuess) < Math.abs(userGuess - secretGuess)) {
        return false
    } else {
        return true
    }
}

    // Log Compare Guesses
    console.log(compareGuesses(10, 10, 10));