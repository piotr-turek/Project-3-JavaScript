const projectsList = document.querySelector("#projects-carusell ul");
const projectItems = document.querySelectorAll("#projects-carusell ul li");
const arrowLeft = document.querySelector("#projects-arrow--left");
const arrowRight = document.querySelector("#projects-arrow--right");
let itemWidth = projectItems[0].offsetWidth; // szerokość pojedynczego elementu

window.onresize = function () {
  itemWidth = projectItems[0].offsetWidth;
};

let currentPosition = 0;

arrowLeft.addEventListener("click", () => {
  if (currentPosition <= 0) {
    // przesuwamy na koniec
    currentPosition = projectsList.scrollWidth - projectsList.offsetWidth;
  } else {
    // przesuwamy o szerokość pojedynczego elementu
    currentPosition -= itemWidth;
  }
  projectsList.scrollTo({
    left: currentPosition,
  });
});

arrowRight.addEventListener("click", () => {
  if (currentPosition >= projectsList.scrollWidth - projectsList.offsetWidth) {
    // przesuwamy na początek
    currentPosition = 0;
  } else {
    // przesuwamy o szerokość pojedynczego elementu
    currentPosition += itemWidth;
  }
  projectsList.scrollTo({
    left: currentPosition,
  });
});
