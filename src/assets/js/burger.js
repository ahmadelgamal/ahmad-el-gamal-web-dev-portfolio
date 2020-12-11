const toggleBarsEl = document.getElementById("toggle-bars");

// function to toggle burger menu by adding a classname
function toggleBurgerMenu() {
  toggleBarsEl.classList.toggle("burger-menu-x");
}

toggleBarsEl.addEventListener("click", toggleBurgerMenu);
