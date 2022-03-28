const arrows = document.querySelectorAll(".arrow");
const redSlider = document.querySelector(".slider--red");
const blueSlider = document.querySelector(".slider--blue");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (redSlider.classList.contains("sliderHidden")) {
      redSlider.classList.remove("sliderHidden");
      blueSlider.classList.add("sliderHidden");
    } else if (blueSlider.classList.contains("sliderHidden")) {
      redSlider.classList.add("sliderHidden");
      blueSlider.classList.remove("sliderHidden");
    }
  });
});
