const tabContainters = document.querySelectorAll(".tab-content");

tabContainters.forEach((cont) => {
  const tabBtns = cont.querySelectorAll(".tab-content__tab");
  const tabPages = cont.querySelectorAll(".tab-content__page");

  tabBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      tabPages.forEach((page) => page.classList.remove("active"));

      btn.classList.add("active");
      tabPages[idx].classList.add("active");
    });
  });
});
