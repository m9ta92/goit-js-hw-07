// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.
// <ul class="gallery"></ul>
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або
// шаблонні рядки і elem.insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const createGalleryCard = (imageInfo) => {
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery-item");

  const galleryImgEl = document.createElement("img");
  galleryImgEl.src = imageInfo.url;
  galleryImgEl.alt = imageInfo.alt;
  galleryImgEl.width = 300;
  galleryImgEl.height = 360;
  galleryItemEl.append(galleryImgEl);
  return galleryItemEl;
};
const galleryCardsArr = images.map((imgInfo) => createGalleryCard(imgInfo));

const galleryListEl = document.querySelector(".gallery");
galleryListEl.append(...galleryCardsArr);

const galleryStyleEl = document.querySelector(".gallery");
galleryStyleEl.style.listStyle = "none";
galleryStyleEl.style.maxWidth = " 1128px";
galleryStyleEl.style.display = "flex";
galleryStyleEl.style.flexDirection = "row";
galleryStyleEl.style.flexWrap = "wrap";
galleryStyleEl.style.columnGap = "24px";
galleryStyleEl.style.rowGap = "48px";
