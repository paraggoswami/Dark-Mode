const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', newTheme);

  localStorage.setItem('theme', newTheme);
}

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  } else {
    body.setAttribute('data-theme', 'light');
  }
});

themeToggleButton.addEventListener('click', toggleTheme);
