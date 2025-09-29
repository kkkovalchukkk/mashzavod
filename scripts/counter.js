function runCounter(element) {
  if (!element || !element.dataset.numberRollupEnd) return;

  const start = 0;
  const targetNumber = +element.dataset.numberRollupEnd;
  const duration = +element.dataset.numberRollupDuration || 2000;

  if (isNaN(targetNumber) || isNaN(duration)) return;

  const increment = targetNumber / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNumber) {
      clearInterval(timer);
      current = targetNumber;
      element.textContent = Math.floor(current);
      element.classList.add("completed"); // добавляем класс по завершении
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Запуск анимации когда элемент появляется в viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("completed")
      ) {
        runCounter(entry.target);
        observer.unobserve(entry.target); // останавливаем наблюдение после запуска
      }
    });
  },
  { threshold: 0.5 }
); // запуск когда 50% элемента видно

// Наблюдаем за всеми элементами
document.querySelectorAll(".number-rollup").forEach((item) => {
  observer.observe(item);
});
