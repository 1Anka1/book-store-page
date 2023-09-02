const img = document.querySelector(".banner-book-img");
const initialImagePath = img.src;

img.addEventListener("mouseover", () => {
  const newImagePath = "./public/img/light-front-page.png";
  img.src = newImagePath;
});

img.addEventListener("mouseleave", () => {
  img.src = initialImagePath;
});
