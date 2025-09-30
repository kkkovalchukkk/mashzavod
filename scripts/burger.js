const headerBurgerEl = document.querySelector(".header__burger");
const overlayEl = document.querySelector(".overlay");

function showMobileMenu() {
  overlayEl.classList.add("overlay_active");
}
function hideMobileMenu() {
  overlayEl.classList.remove("overlay_active");
}

function offScroll() {
  document.querySelector("html").classList.add("no-scroll");
  document.body.classList.add("no-scroll");
}

function onScroll() {
  document.querySelector("html").classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");
}

headerBurgerEl.addEventListener("click", () => {
  if (headerBurgerEl.classList.contains("header__burger_active")) {
    headerBurgerEl.classList.remove("header__burger_active");
    onScroll();
    hideMobileMenu();
  } else {
    offScroll();
    showMobileMenu();
    headerBurgerEl.classList.add("header__burger_active");
  }
});

overlayEl.addEventListener("click", (e) => {
  if (e.target === overlayEl) {
    onScroll();
    hideMobileMenu();
    headerBurgerEl.classList.remove("header__burger_active");
  }
});
