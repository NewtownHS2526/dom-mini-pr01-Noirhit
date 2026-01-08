console.log("Script Running");

const changePosition = (horse, position) => {
  if (position <= 5) { 
    horse.style.setProperty('grid-column', position);
  }
};

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const pinkButton = document.querySelector("#pink-button");
const brownButton = document.querySelector("#brown-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkHorse = document.querySelector("#pink-horse");
const brownHorse = document.querySelector("#brown-horse");
const winnerButton = document.querySelector("#winner");

const handleWin = (color) => {
  winnerButton.textContent = `${color} wins the race`;
 
  blueButton.disabled = true;
  pinkButton.disabled = true;
  brownButton.disabled = true;
};

// Check for a winner
const checkWinner = (position, color) => {
  if (position >= 5) {
    handleWin(color);
  }
};

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "blue");
};

const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "pink"); 
};

const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "brown");
};

// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);
zzz