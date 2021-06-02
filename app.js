const container = document.querySelector(".container");
const clearButton = document.querySelector(".btn");

function drawGrid(numOfDivs) {
  let squareDim = (600 / numOfDivs - 2).toFixed(2);
  let numOfSqr = Math.pow(numOfDivs, 2);

  while (numOfSqr > 0) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("sqr");
    newDiv.style.width = squareDim + "px";
    newDiv.style.height = squareDim + "px";
    newDiv.style.border = "1px solid green";
    container.appendChild(newDiv);
    container.style.gridTemplateColumns = `repeat(${numOfDivs},1fr)`;

    numOfSqr--;
  }

  const sqr = document.querySelectorAll(".sqr");
  sqr.forEach((item, i) => {
    item.addEventListener("mouseenter", changeColor);
  });
}

function changeColor() {
  let colorR = Math.floor(Math.random() * 256);
  let colorG = Math.floor(Math.random() * 256);
  let colorB = Math.floor(Math.random() * 256);
  console.log(colorR, colorG, colorB);
  this.style.backgroundColor =
    "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function clearGrid() {
  let newGridSize = prompt("Please enter number between 1 and 100:");
  if (newGridSize > 1 && newGridSize <= 100) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    drawGrid(newGridSize);
  } else {
    alert("Choose a number between 1 and 100");
    clearGrid();
  }
}
drawGrid(25);
clearButton.addEventListener("click", clearGrid);


