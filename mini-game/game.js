let secret = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guessInput = document.getElementById('guess');
  const result = document.getElementById('result');
  const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    updateResult("❗ Введите число!", "#ff6b6b");
    return;
  }

  const difference = Math.abs(secret - guess);

  if (guess === secret) {
    updateResult(`🎉 Угадал! Это ${secret}`, "#70ffcc");
  } else if (difference <= 5) {
    updateResult("🔥 Очень близко!", "#ffd700");
  } else if (guess < secret) {
    updateResult("📉 Слишком мало", "#ffa94d");
  } else {
    updateResult("📈 Слишком много", "#ffa94d");
  }
}

function updateResult(message, color) {
  const result = document.getElementById('result');
  result.textContent = message;
  result.style.color = color;

  result.style.opacity = "0.6";
  result.style.transform = "scale(1.05)";
  setTimeout(() => {
    result.style.opacity = "1";
    result.style.transform = "scale(1)";
  }, 150);
}

function resetGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  document.getElementById('guess').value = '';
  const result = document.getElementById('result');
  result.textContent = '';
  result.style.color = '';
}
