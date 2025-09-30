function enableDarkMode() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'js/dark-mode/dark-mode.css';
  link.id = 'dark-theme';
  document.head.appendChild(link);
}

function disableDarkMode() {
  const link = document.getElementById('dark-theme');
  if (link) link.remove();
}

function toggleTheme() {
  const existing = document.getElementById('dark-theme');
  if (existing) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}
