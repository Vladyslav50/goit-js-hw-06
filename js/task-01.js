const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.dir(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});

// const categoriesList = document.querySelector("#categories");
// [...categoriesList.children].forEach((item) => {
//   console.log(item.firstElementChild);
//   console.log(item.lastElementChild);
// });
