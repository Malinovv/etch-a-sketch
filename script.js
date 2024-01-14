const parentContainer = document.querySelector(".parent");
const resetBtn = document.querySelector("#reset");

function createDivs() {
  for (let i = 0; i < 256; i++) {
    const childDiv = document.createElement("div");
    childDiv.setAttribute("class", "child");
    parentContainer.appendChild(childDiv);
  }
}

createDivs();

const children = document.querySelectorAll(".child");

function changeColor() {
  this.style.backgroundColor = "red";
}

children.forEach((child) => {
  child.addEventListener("mouseover", changeColor);
});

resetBtn.addEventListener("click", () => {
  children.forEach((child) => {
    child.style.backgroundColor = "aqua";
  });
});
