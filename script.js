// Calculator Script
// Initialize Variables
let num1,
num2,
operator,
neg1 = false,
neg2 = false

const numBtns = document.querySelectorAll('.num button'),
opBtns = document.querySelectorAll('.ops button'),
plusBtn = document.querySelector('#add'),
vPort = document.querySelector('.view'),
decBtn = document.querySelector('#dec')

// Operator Functions
function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function sub(num1, num2) {
    return Number(num1) - Number(num2)
}

function mult(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

function operate(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return sub(num1, num2)
    } else if (operator === '*') {
        return mult(num1, num2) 
    } else if (operator === '/') {
        return divide(num1, num2)
    } else { // Catch Error
        alert('ERROR: INVALID OPERATOR')
    }
}

// Event listener to update the viewport when a NUMBER button is pressed
numBtns.forEach((btn) => {
    if (btn.id === 'neg') { // Pos/Neg Button
        btn.addEventListener('click', () => {
            if ((neg1)  && (!vPort.textContent.includes(operator))) { // First number is negative -- Turn it positive
                vPort.textContent = vPort.textContent.replace('-', '')
                neg1 = false
            } else if ((neg1 === false) && (!vPort.textContent.includes(operator))) { // First number is positive AND theres only one number-- Turn it negative
                newNum1 = '-' + vPort.textContent
                neg1 = true

                vPort.textContent = newNum1
            }

            if ((neg2) && (vPort.textContent.includes(operator))) { // Second number is negative -- Turn it positive
                let vPortNums = vPort.textContent.split(operator)
                num1 = vPortNums[0]
                num2 = vPortNums[1]
                newNum2 = num2.replace('-', '')
                neg2 = false

                vPort.textContent = vPort.textContent.replace(num2, newNum2)
            } else if ((neg2 === false) && (vPort.textContent.includes(operator))) { // First is neg AND Second is pos
                let vPortNums = vPort.textContent.split(operator)
                num1 = vPortNums[0] 
                num2 = vPortNums[1]
                newNum2 = '-' + num2
                neg2 = true

                vPort.textContent = vPort.textContent.replace(num2, newNum2)
            }
        })
    
    } else {
        btn.addEventListener('click', () => {
            vPort.textContent += btn.textContent
            if (btn.id === 'dec') btn.disabled = true;
        })
    }
})

// Event listener to run operations 
opBtns.forEach((btn) => {
    if (btn.id === 'add') {
        btn.addEventListener('click', () => {
            operator = '+'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent

            // Disable use a second time -- Only one operation at a time
            // Ternary Operation -- if id = clear || equal then enable button, otherwise disable
            opBtns.forEach((btn) => btn.id ==='clear' ? btn.disabled = false : btn.id === 'equal' ? btn.disabled = false : btn.disabled = true)
            decBtn.disabled = false
        })
    } else if (btn.id ==='sub') {
        btn.addEventListener('click', () => {
            operator = '-'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent

            // Disable use a second time -- Only one operation at a time
            opBtns.forEach((btn) => btn.id ==='clear' ? btn.disabled = false : btn.id === 'equal' ? btn.disabled = false : btn.disabled = true)
            decBtn.disabled = false
        })
    } else if (btn.id === 'mult') {
        btn.addEventListener('click', () => {
            operator = 'x'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent

            // Disable use a second time -- Only one operation at a time
            opBtns.forEach((btn) => btn.id ==='clear' ? btn.disabled = false : btn.id === 'equal' ? btn.disabled = false : btn.disabled = true)
            decBtn.disabled = false
        })
    } else if (btn.id === 'div') {
        btn.addEventListener('click', () => {
            operator = '/'
            num1 = vPort.textContent
            vPort.textContent += btn.textContent
            
            // Disable use a second time -- Only one operation at a time
            opBtns.forEach((btn) => btn.id ==='clear' ? btn.disabled = false : btn.id === 'equal' ? btn.disabled = false : btn.disabled = true)
            decBtn.disabled = false
        })
    } else if (btn.id === 'clear') {
        btn.addEventListener('click', () => {
            // Reset -- Unpress buttons / Clear viewport
            decBtn.disabled = false
            opBtns.forEach((btn) => btn.disabled = false)
            neg1 = false
            neg2 = false
            vPort.textContent = ''
        })
    } else if (btn.id === 'equal') {
        btn.addEventListener('click', () => {
            let vPortNums = vPort.textContent.split(operator) // Should be an Array containing the 2 numbers selected
            num2 = vPortNums[1]
            if (operator === 'x') operator = '*';
            if (num1 == 0 || num2 == 0) return alert('You cant divide by 0 dippy')
            vPort.textContent = Math.round(operate(num1, operator, num2) * 10000) / 10000;

            // Check if answer is negative
            (vPort.textContent.includes('-')) ? neg1 = true : neg1 = false;
            neg2 = false
            
            // Unpress buttons
            decBtn.disabled = false
            opBtns.forEach((btn) => btn.disabled = false)
        })
    }
})