window.onload = function() {
  let time = 0;
  let timer = null;

  const displayEl = document.getElementById('display');
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  const resetBtn = document.getElementById('reset');

  function updateDisplay() {
    if (displayEl) {
      displayEl.textContent = time + 's';
    }
  }
  function startTimer() {
    if (!timer && time < 30) {
      timer = setInterval(() => {
        time += 3;
        updateDisplay();

        if (time >= 30) {
          clearInterval(timer);
          timer = null;
        }
      }, 1000);
    }
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetTimer() {
    stopTimer();
    time = 0;
    updateDisplay();
  }

  if (startBtn) startBtn.addEventListener('click', startTimer);
  if (stopBtn) stopBtn.addEventListener('click', stopTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetTimer);
  
  updateDisplay();
};