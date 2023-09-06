const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const initialSize = 30;
  const stepSize = 10;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = initialSize + i * stepSize + "px";
    box.style.height = initialSize + i * stepSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

createButton.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
  input.value = ""; // Очищаємо інпут після створення
});

destroyButton.addEventListener("click", destroyBoxes);
