const display = document.getElementById('display');
let currentInput = '0';
let previousValue = null;
let operator = null;
let justEvaluated = false;

function updateDisplay(value) {
  display.textContent = value;
}

function clearAll() {
  currentInput = '0';
  previousValue = null;
  operator = null;
  justEvaluated = false;
  updateDisplay(currentInput);
}

function inputDigit(d) {
  if (justEvaluated) {
    currentInput = '0';
    justEvaluated = false;
  }
  if (currentInput === '0') {
    currentInput = d;
  } else {
    currentInput += d;
  }
  updateDisplay(currentInput);
}

function setOperator(op) {
  if (operator && previousValue !== null) {
    evaluate();
  }
  previousValue = parseFloat(currentInput);
  operator = op;
  currentInput = '0';
}

function evaluate() {
  const a = previousValue;
  const b = parseFloat(currentInput);
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        updateDisplay('Erro');
        currentInput = '0';
        previousValue = null;
        operator = null;
        justEvaluated = true;
        return;
      }
      result = a / b;
      break;
    default:
      return;
  }
  currentInput = String(result);
  updateDisplay(currentInput);
  previousValue = null;
  operator = null;
  justEvaluated = true;
}

document.querySelectorAll('.key').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-value');
    if (/^\d$/.test(val)) {
      inputDigit(val);
    } else if (['+', '-', '*', '/'].includes(val)) {
      setOperator(val);
    } else if (val === '=') {
      evaluate();
    } else if (val === 'C') {
      clearAll();
    }
  });
});

clearAll();