function showRules() {
  const rulesPopup = document.getElementById("rulesPopup");
  rulesPopup.style.display = "block";
}

function closeRules() {
  const rulesPopup = document.getElementById("rulesPopup");
  rulesPopup.style.display = "none";
}

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Hide the "sign" elements
  const signElements = document.querySelector(".sign");
  signElements.style.display = "none";

  const resultElements = document.querySelector(".result");
  resultElements.style.display = "flex";

  // Update the computer's choice element with the chosen image and class
  const computerChoiceElement = document.querySelector(".computer-choice");
  computerChoiceElement.querySelector("img").src = `./resource/${computerChoice}.png`;
  computerChoiceElement.classList.add(computerChoice);
  computerChoiceElement.classList.add("selected");

  // Update the person's choice element with the chosen image and class
  const personChoiceElement = document.querySelector(".person-choice");
  personChoiceElement.querySelector("img").src = `./resource/${playerChoice}.png`;
  personChoiceElement.classList.add(playerChoice);
  personChoiceElement.classList.add("selected");

  const resultText = document.querySelector(".result h1");
  const resultTexth3 = document.querySelector(".result_button h3");
  const replayButton = document.querySelector(".result_button button");

  if (playerChoice === computerChoice) {
    resultText.textContent = "TIE UP";
    replayButton.textContent = "REPLAY";
    showNextButton(false);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    // You win
    resultText.textContent = "YOU WIN";
    resultTexth3.textContent = "AGAINST PC";
    replayButton.textContent = "Play Again";
    showNextButton(true);
    personChoiceElement.classList.add("box4");
    updateScore("person_score");
  } else {
    // Computer wins
    resultText.textContent = "YOU LOST";
    resultTexth3.textContent = "AGAINST PC";
    replayButton.textContent = "Play Again";
    showNextButton(false);
    computerChoiceElement.classList.add("box4");
    updateScore("pc_score");
  }
}

function updateScore(scoreType) {
  const scoreElement = document.querySelector("." + scoreType + " h1");
  const currentScore = parseInt(scoreElement.textContent, 10);
  scoreElement.textContent = (currentScore + 1).toString();

  // Save the updated score in local storage
  localStorage.setItem(scoreType, currentScore + 1);
}

// Function to get the scores from local storage and update the display
function getScoresFromLocalStorage() {
  const pcScore = localStorage.getItem("pc_score");
  const personScore = localStorage.getItem("person_score");

  if (pcScore) {
    const compScoreElement = document.querySelector(".pc_score h1");
    compScoreElement.textContent = pcScore;
  }

  if (personScore) {
    const personScoreElement = document.querySelector(".person_score h1");
    personScoreElement.textContent = personScore;
  }
}

function showSign() {
  const signElements = document.querySelector(".sign");
  signElements.style.display = "block";

  const resultElements = document.querySelector(".result");
  resultElements.style.display = "none";

  // Hide the additional content
  const additionalContent = document.querySelector(".additional-content");
  additionalContent.style.display = "none";

  showNextButton(false);
  // Make the score board visible
  const scoreBoardElements = document.querySelector(".score_board");
  scoreBoardElements.style.display = "flex";

  // Remove classes from computer and person choice elements
  const computerChoiceElement = document.querySelector(".computer-choice");
  computerChoiceElement.querySelector("img").src = "";
  computerChoiceElement.classList.remove("rock", "paper", "scissors", "box4");

  const personChoiceElement = document.querySelector(".person-choice");
  personChoiceElement.querySelector("img").src = "";
  personChoiceElement.classList.remove("rock", "paper", "scissors", "box4");
}

function showAdditionalContent() {
  const additionalContent = document.querySelector(".additional-content");
  additionalContent.style.display = "flex";
  showNextButton(false);
  // Hide other elements as needed
  const resultElements = document.querySelector(".result");
  resultElements.style.display = "none";

  const scoreBoardElements = document.querySelector(".score_board");
  scoreBoardElements.style.display = "none";
}

// Function to show the "NEXT" button only when the player wins
function showNextButton(flag) {
  const nextButton = document.getElementById("nextButton");
  // Check if the player has won (you may need to implement this logic)
  const playerWon = flag; // Replace with your logic
  if (playerWon) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }
}

// Call the showNextButton function when you need to check if the player has won
showNextButton();
// this will load score from local storage
getScoresFromLocalStorage();
