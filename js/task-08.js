const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  const formData = new FormData(this);

  const userData = {};

  formData.forEach(function (value, key) {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    alert("Будь ласка, заповніть всі поля форми.");
  } else {
    console.log(userData); // Виводимо об'єкт із введеними даними в консоль
    this.reset(); // Очищаємо значення полів форми
  }
});
