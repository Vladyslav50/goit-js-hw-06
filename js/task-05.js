// Отримуємо посилання на елементи DOM
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додаємо слухача події input до інпуту
nameInput.addEventListener("input", () => {
  // Отримуємо поточне значення інпуту
  const inputValue = nameInput.value.trim(); // Видаляємо зайві пробіли початку та кінця

  // Перевіряємо, чи інпут порожній
  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
});
