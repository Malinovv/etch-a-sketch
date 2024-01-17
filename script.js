const parentContainer = document.querySelector(".parent");
const resetBtn = document.querySelector("#reset");
const gridSizeInput = document.querySelector("#gridSize");
const colorPickerInput = document.querySelector("#colorPicker");
const body = document.querySelector("body");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";
  body.appendChild(star);
}

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

gridSizeInput.addEventListener("touchstart", handleTouchStart);
gridSizeInput.addEventListener("touchmove", handleTouchMove);

function handleTouchStart(event) {
  // Store the initial touch position
  initialTouchX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!initialTouchX) {
    return;
  }

  // Calculate the change in touch position
  const touchX = event.touches[0].clientX;
  const deltaX = touchX - initialTouchX;

  // Adjust the grid size based on the touch movement
  gridSizeInput.value = parseInt(gridSizeInput.value) + deltaX;

  // Update the grid
  updateGrid();

  // Store the new initial touch position for the next event
  initialTouchX = touchX;
}

// Initial grid creation with default values
createDivs(gridSizeInput.value);
