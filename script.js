// Calculator Script
// Initialize Variables
let num1,
num2,
operator;

// Operator Functions
function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mult(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return sub(num1, num2)
    } else if (operator === '*') {
        mult(num1, num2) 
    } else if (operator === '/') {
        divide(num1, num2)
    } else { // Catch Error
        alert('ERROR: INVALID OPERATOR')
    }
}