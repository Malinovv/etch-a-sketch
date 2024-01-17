const parentContainer = document.querySelector(".parent");
const resetBtn = document.querySelector("#reset");
const gridSizeInput = document.querySelector("#gridSize");
const colorPickerInput = document.querySelector("#colorPicker");

function createDivs(gridItems) {
  parentContainer.innerHTML = "";
  const gridPattern = gridItems * gridItems;

  const childWidth = 24 / gridItems;
  const childHeight = 24 / gridItems;

  for (let i = 0; i < gridPattern; i++) {
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "child");
    childDiv.style.width = `calc(${childWidth}em)`;
    childDiv.style.height = `calc(${childHeight}em)`;
    parentContainer.appendChild(childDiv);
  }

  const children = document.querySelectorAll(".child");
  children.forEach((child) => {
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
    child.style.backgroundColor = "aqua";
  });
}

createDivs(gridSizeInput.value);

resetBtn.addEventListener("click", resetColors);

gridSizeInput.addEventListener("input", () => {
  const gridItems = gridSizeInput.value;
  createDivs(parseInt(gridItems));
});

colorPickerInput.addEventListener("input", () => {
  const gridItems = gridSizeInput.value;
  createDivs(parseInt(gridItems));
});
