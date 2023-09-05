const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));
  const inputValue = inputElement.value.trim(); // Видаляємо зайві пробіли з початку та кінця

  if (inputValue.length === expectedLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
