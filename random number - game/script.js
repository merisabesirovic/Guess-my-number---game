let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(number);

let buttonCheck = document.getElementById("btn");
// console.log(buttonCheck);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
buttonCheck.addEventListener("click", valueOfnum);
function valueOfnum() {
  let guessNumber = document.getElementsByClassName("input")[0];
  guessNumber = Number(guessNumber.value);
  console.log(guessNumber);
  if (guessNumber === "") {
    displayMessage("⛔️ No number!");
  } else if (guessNumber === number) {
    displayMessage("🎉 Correct Number!");
    let body = document.getElementsByClassName("container")[0];
    body.style.backgroundColor = "green";
    let image = document.getElementsByClassName("sijalica")[0];
    image.setAttribute(
      "src",
      "https://www.pngkit.com/png/full/361-3611980_trophy-trophy-pixel-art-png.png"
    );
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guessNumber !== number) {
    if (score > 1) {
      if (guessNumber > number) {
        displayMessage("📈 Too high!");
      } else displayMessage("📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
}
let again = document.querySelector(".btn-again");
again.addEventListener("click", opet);
function opet() {
  score = 20;
  displayMessage("Start guessing...");
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".container").style.backgroundColor = "#2e1b5b";
}

function preventRefreshOnSubmit() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}
