function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value = (display.value === '0') ? value : display.value + value;
  updateResult(display.value);
}

function clearDisplay() {
  document.getElementById('display').value = '';
  document.getElementById('display').setAttribute('data-result', '');
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    display.setAttribute('data-result', result);
    display.value = result;
  } catch (e) {
    display.setAttribute('data-result', 'Error');
    display.value = 'Error';
  }
}

function updateResult(value) {
  const display = document.getElementById('display');
  try {
    if (value) {
      const result = eval(value);
      display.value = result;
    }
  } catch (e) {
    display.value = value;
  }
}
