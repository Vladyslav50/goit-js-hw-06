// Отримуємо посилання на елементи DOM
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

// Ініціалізуємо змінну counterValue значенням 0
let counterValue = 0;

// Додаємо слухача події кліку на кнопку "Зменшити"
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterValue();
});

// Додаємо слухача події кліку на кнопку "Збільшити"
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterValue();
});

// Функція для оновлення значення лічильника на сторінці
function updateCounterValue() {
  valueSpan.textContent = counterValue;
}
