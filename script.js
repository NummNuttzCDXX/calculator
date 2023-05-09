// Calculator Script
// Initialize Variables
let num1,
num2,
operator

const numBtns = document.querySelectorAll('.num button'),
opBtns = document.querySelectorAll('.ops button')
vPort = document.querySelector('.view')

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

// Event listener to update the viewport when a NUMBER button is pressed
numBtns.forEach((btn) => {
    if (btn.id === 'equal') {
        //TEMP
        btn.addEventListener('click', () => {
            vPort.textContent += btn.textContent
        })
    } else {
        btn.addEventListener('click', () => {
            vPort.textContent += btn.textContent
        })
    }
})

// Event listener to run operations 
opBtns.forEach((btn) => {
    if (btn.id === 'add') {
        btn.addEventListener('click', () => {
            operator = 'plus'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent
        })
    } else if (btn.id ==='sub') {
        btn.addEventListener('click', () => {
            operator = 'minus'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent
        })
    } else if (btn.id === 'mult') {
        btn.addEventListener('click', () => {
            operator = 'times'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent
        })
    } else if (btn.id === 'div') {
        btn.addEventListener('click', () => {
            operator = 'divide'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent
        })
    } else if (btn.id === 'clear') {
        btn.addEventListener('click', () => {
            vPort.textContent = ''
        })
    } 
})