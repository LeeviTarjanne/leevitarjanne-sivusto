const fullScreenImage = document.querySelector("#full-screen-image");
const imgViewer = document.querySelector("#img-viewer");
const images = document.querySelectorAll(".img-source");
const closeButton = document.querySelector("#close-image-button");

images.forEach((image) => {
  image.addEventListener("click", function () {
    fullScreenImage.src = this.src;
    fullScreenImage.alt = this.alt;
    imgViewer.style.display = "block";
  });
});

function closeViewer() {
  imgViewer.style.display = "none";
}

closeButton.addEventListener("click", closeViewer);

// Sulje myös klikkaamalla taustaa
imgViewer.addEventListener("click", function (event) {
  if (event.target === imgViewer) {
    closeViewer();
  }
});

// Sulje Esc-näppäimellä
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeViewer();
  }
});
