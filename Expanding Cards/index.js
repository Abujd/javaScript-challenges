const slides = document.querySelectorAll(".panel");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
   removeActiveClass()
    slide.classList.add("active");
  });
});

function removeActiveClass(){
    slides.forEach((slide) => {
        slide.classList.remove("active");
      });
};
