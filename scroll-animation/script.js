const boxes = document.querySelectorAll(".box");
const parentContainer = document.getElementById("parentContainer");

// Have a look when you will get a time


// generateBoxes();
// function generateBoxes() {
//   for (let i = 0; i < 10; i++) {
//     const div = document.createElement("div");
//     div.className = "box";

//     const h2 = document.createElement("h2");
//     h2.textContent = "Content";

//     div.appendChild(h2);
//     parentContainer.appendChild(div);
//   }

//   const h1 = document.createElement("h1");
//   h1.textContent = "Scroll to see the animation";

//   parentContainer.prepend(h1);
// }

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
