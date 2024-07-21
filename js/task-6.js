

const inputRef = document.querySelector("#controls input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", () => {
  const amount = parseInt(inputRef.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputRef.value = "";
  }
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(box);
    box.innerHTML = "";
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
