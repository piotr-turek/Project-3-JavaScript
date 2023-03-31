console.log("Hi! I'm working!");
const c1 = document.getElementById("0");
const c2 = document.getElementById("1");
const c3 = document.getElementById("2");
const c4 = document.getElementById("3");
const c5 = document.getElementById("4");
const c6 = document.getElementById("5");
const c7 = document.getElementById("6");
const c8 = document.getElementById("7");
const c9 = document.getElementById("8");

const cells = document.querySelectorAll(".cell");
const turn = document.getElementById("turn");
const results = document.getElementById("results");
const resultsWin = document.getElementById("results__win");

let isXTurn = true;

function handleClick(cell) {
  {
    if (isXTurn === true) {
      cell.innerHTML = "X";
      turn.innerHTML = "O";
      cell.disabled = true;
      cell.classList.remove("enabled");
      isXTurn = false;
    } else {
      cell.innerHTML = "O";
      turn.innerHTML = "X";
      cell.classList.remove("enabled");
      cell.disabled = true;
      isXTurn = true;
    }
    cell.removeEventListener("click", handleClick);

    winCondictions();

    function checkAllCellsDisabled() {
      let allCellsDisabled = true;
      cells.forEach((cell) => {
        if (!cell.disabled) {
          allCellsDisabled = false;
        }
      });
      return allCellsDisabled;
    }

    if (checkAllCellsDisabled()) {
      results.classList.remove("hidden");
      resultsWin.innerHTML = "Remis!";
    }
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => handleClick(cell));
});

function winCondictions() {
  if (
    (c1.innerHTML === "X" && c2.innerHTML === "X" && c3.innerHTML === "X") ||
    (c4.innerHTML === "X" && c5.innerHTML === "X" && c6.innerHTML === "X") ||
    (c7.innerHTML === "X" && c8.innerHTML === "X" && c9.innerHTML === "X") ||
    (c1.innerHTML === "X" && c4.innerHTML === "X" && c7.innerHTML === "X") ||
    (c2.innerHTML === "X" && c5.innerHTML === "X" && c8.innerHTML === "X") ||
    (c3.innerHTML === "X" && c6.innerHTML === "X" && c9.innerHTML === "X") ||
    (c1.innerHTML === "X" && c5.innerHTML === "X" && c9.innerHTML === "X") ||
    (c3.innerHTML === "X" && c5.innerHTML === "X" && c7.innerHTML === "X")
  ) {
    results.classList.remove("hidden");
    resultsWin.innerHTML = "Wygrał X!";
  } else if (
    (c1.innerHTML === "O" && c2.innerHTML === "O" && c3.innerHTML === "O") ||
    (c4.innerHTML === "O" && c5.innerHTML === "O" && c6.innerHTML === "O") ||
    (c7.innerHTML === "O" && c8.innerHTML === "O" && c9.innerHTML === "O") ||
    (c1.innerHTML === "O" && c4.innerHTML === "O" && c7.innerHTML === "O") ||
    (c2.innerHTML === "O" && c5.innerHTML === "O" && c8.innerHTML === "O") ||
    (c3.innerHTML === "O" && c6.innerHTML === "O" && c9.innerHTML === "O") ||
    (c1.innerHTML === "O" && c5.innerHTML === "O" && c9.innerHTML === "O") ||
    (c3.innerHTML === "O" && c5.innerHTML === "O" && c7.innerHTML === "O")
  ) {
    results.classList.remove("hidden");
    resultsWin.innerHTML = "Wygrał O!";
  }
}

function replay() {
  results.classList.add("hidden");
  isXTurn = true;
  turn.innerHTML = "X";

  cells.forEach((cell) => {
    cell.innerHTML = "&nbsp";
    if (!cell.classList.contains("enabled")) {
      cell.classList.add("enabled");
    }
    cell.disabled = false;
  });
  reAddClickListener();
}

function reAddClickListener() {
  cells.forEach((cell) => {
    if (!cell.hasEventListener("click", handleClick)) {
      cell.addEventListener("click", handleClick);
    }
  });
}
