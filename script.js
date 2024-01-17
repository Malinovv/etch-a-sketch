const parentContainer = document.querySelector(".parent");
const resetBtn = document.querySelector("#reset");
const gridSizeInput = document.querySelector("#gridSize");
const colorPickerInput = document.querySelector("#colorPicker");

function createDivs(gridItems) {
  parentContainer.innerHTML = "";
  const gridPattern = gridItems * gridItems;

  for (let i = 0; i < gridPattern; i++) {
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "child");
    parentContainer.appendChild(childDiv);
  }

  const children = document.querySelectorAll(".child");
  children.forEach((child) => {
    child.style.width = `calc(100% / ${gridItems})`;
    child.style.height = `calc(100% / ${gridItems})`;
    child.addEventListener("mouseover", changeColor);
  });
}

function changeColor() {
  const selectedColor = colorPickerInput.value;
  this.style.backgroundColor = selectedColor;
}

function resetColors() {
  const children = document.querySelectorAll(".child");
  children.forEach((child) => {
    child.style.backgroundColor = "transparent";
  });
}

function updateGrid() {
  const gridItems = gridSizeInput.value;
  createDivs(parseInt(gridItems));
}

resetBtn.addEventListener("click", resetColors);

gridSizeInput.addEventListener("input", () => {
  updateGrid();
});

colorPickerInput.addEventListener("input", () => {
  const gridItems = gridSizeInput.value;
  createDivs(parseInt(gridItems));
});

createDivs(gridSizeInput.value);
