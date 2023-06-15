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


// querySelectorAll - querySelectorAll is used to select all element from DOM that matches the specified css selector 
// and return the nodelist