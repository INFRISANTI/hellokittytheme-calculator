let display = document.querySelector('.display');
let currentValue = '0';
let storedValue = '';
let currentOperator = '';

// fungsi input display angka
function setNumber(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else {
        currentValue += number;
    }
    display.value = currentValue;
}
// fungsi input operator
function setOperator(operator) {
    if (storedValue && currentOperator) {
        calculateResult();
    } else {
        storedValue = currentValue;
    }
    currentOperator = operator;
    currentValue = '0';
}
// hasil kalkulator
function calculateResult() {
    if (!storedValue || !currentOperator) return;

let result;
const num1 = parseFloat(storedValue);
const num2 = parseFloat(currentValue);

switch (currentOperator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        return;}

display.value = result;
currentValue = result.toString();
storedValue = '';
currentOperator = '';
}
// hapus display menjadi 0
function clearDisplay() {
    currentValue = '0';
    storedValue = '';
    currentOperator = '';
    display.value = '0';
}
// fitur titik pada kalkulator
function setDot() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        display.value = currentValue;
    }
}
