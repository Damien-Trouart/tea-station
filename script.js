const logoBurger = document.querySelector(".burger-menu-logo")
const logoRedCross = document.querySelector(".close-menu-logo")
const slidingMenu = document.querySelector(".sliding-menu")
const burgerToggler = document.getElementById("burger-toggler")

function burgerToggling() {

  if (burgerToggler.checked) {
    burgerToggler.checked = false;
  }
  else {
    burgerToggler.checked = true;
  }
  slideMenu();
}


logoBurger.addEventListener("click", burgerToggling)
logoRedCross.addEventListener("click", burgerToggling)


function slideMenu() {
  if (burgerToggler.checked === true) {
    slidingMenu.style.transform = "translateX(100%)";
  }
  else {
    slidingMenu.style.transform = "translateX(0)";
  }
}