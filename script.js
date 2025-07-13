let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerX, playerO
let count = 0;

// let arr = ["apple", "banana0", "litchi"] //1D Array
// let arr2 = [["apple", "litchi"], ["potato", "mushroom"], ["pants", "shirts"]] //2D array

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
      box.style.color = "#b0413e"
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
      box.style.color = "green";
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    let audio = new Audio("winner.mp3");
    audio.play();
    disableBoxes();
}

// to add the music
// let play = document.getElementById("play")

// function audioWinner(){
//   let audio = new Audio("winner.mp3");
//   audio.play();
// };


const gameDraw = () => {
  msg.innerText = "Game is Draw, PLay again"
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos2Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            // console.log("Winner", pos1Val);
            showWinner(pos1Val);
        }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
// play.addEventListener("click", audioWinner);