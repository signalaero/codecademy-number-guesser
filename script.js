let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(min, max) {
    return Math.floor(Math.random() * (9 - 0) + 0);
  }

  // Log Generate Target
  console.log(generateTarget());