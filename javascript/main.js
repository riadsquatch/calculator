let currentValue = '';
let isPositive = true;

function updateDisplay() {
  document.getElementById("result").value = isPositive ? currentValue : `-${currentValue}`;
}

function appendToResult(char) {
  currentValue += char;
  updateDisplay();
}

function toggleSign() {
  if (currentValue.startsWith('-')) {
    currentValue = currentValue.substring(1);
    isPositive = true;
  } else {
    currentValue = `-${currentValue}`;
    isPositive = false;
  }
  updateDisplay();
}

function fraction(){
  currentValue = 1 / currentValue;
  updateDisplay();
}

function squared() {
  if (currentValue == 0) {
    alert("You sure about that?");
  } else {
    currentValue = (parseFloat(currentValue) * parseFloat(currentValue)).toString();
  }
  updateDisplay();
}

function squareRoot() {
  if (currentValue >= 0) {
    currentValue = Math.sqrt(parseFloat(currentValue)).toString();
  } else {
    alert("Silly Billy, you can't have the square root of a negative number!");
  }
  updateDisplay();
}

function clearResult() {
  currentValue = '';
  isPositive = true;
  updateDisplay();
}

function clearEverything() {
  clearResult();
  document.getElementById("result").value = '';
}

function deleteChar() {
  currentValue = currentValue.slice(0, -1);
  if (currentValue === '-') {
    currentValue = '';
    isPositive = true;
  }
  updateDisplay();
}

function dunWurkGud() {
  alert("I dUn wUrk GuD ¯\\_(ツ)_/¯");
}

function calculateResult() {
  try {
    currentValue = eval(currentValue).toString();
    isPositive = currentValue >= 0;
  } catch (e) {
    dunWurkGud();
  }
  updateDisplay();
}

