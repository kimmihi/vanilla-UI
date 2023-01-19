import "./styles.css";
window.onload = () => {
  let currentSlideIdx = 0;
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  nextBtn.addEventListener("click", () => {
    currentSlideIdx = showNextSlide(currentSlideIdx + 1);
  });

  prevBtn.addEventListener("click", () => {
    currentSlideIdx = showNextSlide(currentSlideIdx - 1);
  });

  const initSlide = () => {
    const slides = document.querySelectorAll(".slide-item");
    slides[currentSlideIdx].style.display = "flex";
  };

  const showNextSlide = (nextSlideIdx) => {
    const slides = document.querySelectorAll(".slide-item");
    if (nextSlideIdx >= slides.length) {
      nextSlideIdx = 0;
    }

    if (nextSlideIdx < 0) {
      nextSlideIdx = slides.length - 1;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[nextSlideIdx].style.display = "flex";

    return nextSlideIdx;
  };

  initSlide();
};
