const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.addEventListener("input", changeSize);

function changeSize(evt) {
  //   console.dir(evt.currentTarget);
  const fontSize = evt.currentTarget.value + "px"; // Отримуємо значення з повзунка і додаємо 'px' для властивості font-size
  textElement.style.fontSize = fontSize; // Змінюємо розмір тексту
}

// fontSizeControl.addEventListener("input", () => {
//   const fontSize = fontSizeControl.value + "px"; // Отримуємо значення з повзунка і додаємо 'px' для властивості font-size
//   textElement.style.fontSize = fontSize; // Змінюємо розмір тексту
// });
