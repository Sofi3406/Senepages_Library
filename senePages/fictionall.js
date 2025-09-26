// 🌙 Toggle Dark/Light Mode
const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// // 🎧 Listen button (Text-to-Speech)
// const listenButtons = document.querySelectorAll(".listen-btn");

// listenButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const bookCard = button.parentElement;
//     const text = bookCard.querySelector("p").textContent;

//     const utterance = new SpeechSynthesisUtterance(text);
//     speechSynthesis.speak(utterance);
//   });
// });
// 🌙 Toggle Dark/Light Mode


// 🎧 Listen button (Text-to-Speech)
const listenButtons = document.querySelectorAll(".listen-btn");

listenButtons.forEach(button => {
  button.addEventListener("click", () => {
    const bookCard = button.parentElement;
    const text = bookCard.querySelector("p,a[href$='.pdf']").textContent;

    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  });
});
(function () {
  const input = document.getElementById('bookSearch');
  const noResults = document.getElementById('noResults');

  function normalize(s) {
    return (s || '').toLowerCase().normalize('NFKD');
  }

  function filterBooks() {
    const q = normalize(input.value.trim());
    const cards = Array.from(document.querySelectorAll('.book-card'));
    let visibleCount = 0;

    if (!q) {
      cards.forEach(card => card.style.display = '');
      noResults.style.display = 'none';
      return;
    }

    cards.forEach(card => {
      const data = card.getAttribute('data-search');
      const source = data ? data : card.textContent;
      const hay = normalize(source);
      const isMatch = hay.includes(q);
      card.style.display = isMatch ? '' : 'none';
      if (isMatch) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  // debounce
  let debounceTimer = null;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterBooks, 120);
  });

  // "/" shortcut to focus search
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
      input.select();
    }
  });
})();
// You can add more quotes here
const quotes = [
  { text: "The more that you read, the more things you will know.", author: "Dr. Seuss" },
  {text: "The best way to get started is to quit talking and begin doing."},
  {text: "Don't let yesterday take up too much of today."},
  {text: "It's not whether you get knocked down, it's whether you get up."},
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "A reader lives a thousand lives before he dies.", author: "George R.R. Martin" },
  { text: "Education is the most powerful weapon to change the world.", author: "Nelson Mandela" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" }
];

// pick random quote each time page loads
function showQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").textContent = "${random.text}";
  document.getElementById("quoteAuthor").textContent =' — ${random.author}';
}

document.addEventListener("DOMContentLoaded", showQuote);

