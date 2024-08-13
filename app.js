let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, player0
let gameOver = false;

const winPatterns = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver) return;
        console.log("box has been clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerHTML = `Congrats, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gameOver = true;
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        let pos4Val = boxes[pattern[3]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" && pos4Val != "" && pos1Val === pos2Val && pos1Val === pos3Val && pos1Val === pos4Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
    }
    if (!gameOver && Array.from(boxes).every((box) => box.disabled)) {
        msg.innerHTML = "It's a draw!";
        msgContainer.classList.remove("hide");
        gameOver = true;
    }
};

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgContainer.classList.add("hide");
    gameOver = false;
    turn0 = true;
});

newGamebtn.addEventListener("click", () => {
    resetBtn.click();
});