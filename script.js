const arrows = document.querySelectorAll(".arrow");
const redSlider = document.querySelector(".slider--red");
const blueSlider = document.querySelector(".slider--blue");
const burgerOn = document.querySelector(".burgerMenu");
const burgerOff = document.querySelector(".mobilePageWrapper");
const logo = document.querySelector(".header--logo");
const burgerIcons = document.querySelectorAll(".burgerIcon");
const navigation = document.querySelectorAll(".navigationMobile");
const main = document.querySelector("main");

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

burgerIcons.forEach((burgerIcon) => {
  burgerIcon.addEventListener("click", () => {
    if (burgerOff.classList.contains("activBurgerMenu")) {
      burgerOff.classList.remove("activBurgerMenu");
      burgerOn.classList.add("activBurgerMenu");
      logo.classList.add("activBurgerMenu");
      main.classList.add("opasityForBurger");
    } else if (burgerOn.classList.contains("activBurgerMenu")) {
      burgerOff.classList.add("activBurgerMenu");
      burgerOn.classList.remove("activBurgerMenu");
      logo.classList.remove("activBurgerMenu");
      main.classList.remove("opasityForBurger");
    }
  });
});

navigation.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    burgerOff.classList.add("activBurgerMenu");
    burgerOn.classList.remove("activBurgerMenu");
    logo.classList.remove("activBurgerMenu");
    main.classList.remove("opasityForBurger");
  });
});
