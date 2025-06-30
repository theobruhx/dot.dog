// показать увед при записи
function showAlert() {
  alert("Вы успешно записались на мероприятие!");
}

// переключение страниц книги
let currentPage = 0;

function showPage(index) {
  const pages = document.querySelectorAll('.book_page');
  pages.forEach((page, i) => {
    page.classList.remove('active');
    if (i === index) page.classList.add('active');
  });
}

function nextPage() {
  const pages = document.querySelectorAll('.book_page');
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
}

window.addEventListener('DOMContentLoaded', () => {
  showPage(currentPage);
});

// === курсор в виде лапки на странице book.html ===
document.addEventListener("DOMContentLoaded", () => {
  const book = document.querySelector(".book_view");
  if (book) {
    book.style.cursor = "url('img/cursor/paw_cursor.png'), auto";
  }
});

// === подсветка кнопки записаться, если пользователь задержался нга ней ===
setTimeout(() => {
  const btn = document.querySelector(".event_btn");
  if (btn) {
    btn.classList.add("attention");
  }
}, 5000); // через 5 секунд

// === автозаполнение имени, если пользователь уже заходил ===
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const form = document.querySelector("form");

  if (nameInput && localStorage.getItem("dotdog_name")) {
    nameInput.value = localStorage.getItem("dotdog_name");
  }

  if (form) {
    form.addEventListener("submit", () => {
      if (nameInput.value.trim() !== "") {
        localStorage.setItem("dotdog_name", nameInput.value.trim());
      }
    });
  }
});

// === анимация пивных банок при скролле (merch.html) ===
const cans = document.querySelectorAll(".product_card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up");
    }
  });
}, { threshold: 0.5 });

cans.forEach(card => observer.observe(card));

// === случайная цитата на главной ===
const quotes = [
  "Пей и играй, как собака!",
  "Собачья радость — это мы!",
  "Каждая баночка — лайк от хвоста.",
  "DOT.DOG — повод выйти на улицу!",
  "Лучшие встречи начинаются с хвоста."
];

const quoteBlock = document.getElementById("quote");
if (quoteBlock) {
  quoteBlock.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

// === прелоадер с логотипом DOT.DOG ===
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.remove(), 500);
  }
});
