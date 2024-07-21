// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// 1. Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2/ Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>)
// і кількість елементів у категорії (усіх <li>, вкладених у нього).

const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItemsCount = category.querySelectorAll("li").length;

  console.log(`Categori: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
