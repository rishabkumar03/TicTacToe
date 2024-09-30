let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, player0
let gameOver = false;

const winPatterns = [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
    [6, 7, 8],
    [7, 8, 9],
    [10, 11, 12],
    [11, 12, 13],
    [12, 13, 14],
    [15, 16, 17],
    [16, 17, 18],
    [17, 18, 19],
    [20, 21, 22],
    [21, 22, 23],
    [22, 23, 24],
    [0, 5, 10],
    [5, 10, 15],
    [10, 15, 20],
    [1, 6, 11],
    [6, 11, 16],
    [11, 16, 21],
    [2, 7, 12],
    [7, 12, 17],
    [12, 17, 22],
    [3, 8, 13],
    [8, 13, 18],
    [13, 18, 23],
    [4, 9, 14],
    [9, 14, 19],
    [14, 19, 24],
    [2, 6, 10],
    [3, 7, 11],
    [7, 11, 15],
    [4, 8, 12],
    [8, 12, 16],
    [12, 16, 20],
    [9, 13, 17],
    [13, 17, 21],
    [14, 18, 22],
    [2, 8, 14],
    [1, 7, 13],
    [7, 13, 19],
    [0, 6, 12],
    [6, 12, 18],
    [12, 18, 24],
    [5, 11, 17],
    [11, 17, 23],
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

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" && pos1Val === pos2Val && pos1Val === pos3Val) {
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
