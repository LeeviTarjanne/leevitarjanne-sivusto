// Karuselli on käytössä vain mobiilissa (alle 600 px leveillä näytöillä)
if (window.innerWidth <= 600) {
  const carousel = document.querySelector(".karuselli");

  if (carousel) {
    const track = carousel.querySelector(".kortit");
    const slides = track ? track.querySelectorAll(".kortti") : [];
    const prevButton = carousel.querySelector(".korttinuoli--prev");
    const nextButton = carousel.querySelector(".korttinuoli--next");
    const dotsContainer = carousel.querySelector(".dots");

    let currentIndex = 0;
    let autoplayInterval = null;
    const autoplayDelay = 4000;

    // Luodaan pisteet
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.classList.add("dot");
      dot.setAttribute("aria-label", `Kuva ${i + 1}`);
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(i);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function updateDots() {
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    function goToSlide(index) {
      if (index < 0 || index >= slides.length) return;
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateDots();
    }

    function nextSlide() {
      goToSlide((currentIndex + 1) % slides.length);
    }

    function prevSlide() {
      goToSlide((currentIndex - 1 + slides.length) % slides.length);
    }

    nextButton.addEventListener("click", () => {
      nextSlide();
      resetAutoplay();
    });

    prevButton.addEventListener("click", () => {
      prevSlide();
      resetAutoplay();
    });

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, autoplayDelay);
    }

    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }

    startAutoplay();
  }
}
