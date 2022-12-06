const buttons = document.querySelectorAll('.btn')
const display = document.querySelector('#display-header')
btnClear = document.querySelector('.btn-clear')
btnEqual = document.querySelector('.btn-equal')
let num1 = 0;
let num2 = 0;
let operator; 
buttons.forEach(btn =>{
    btn.addEventListener('click', () => {
        display.textContent += btn.textContent
        for (let i = 0; i < display.textContent.length; i++){
        num1 = display.textContent[0]
        operator = display.textContent[1]
        num2 = display.textContent[2]        
        }
        console.log(num1)
        console.log(num2)
        console.log(operator)
        // if (num1 && num2 && operator){
        //     console.log(operate(Number(num1), Number(num2), operator))
        // }
    })
})

btnClear.addEventListener('click', () => display.textContent = '')


function operate(a, b, operation){
    if (operation === '-'){
        subtraction(a,b)
    }
    else if (operation === '+'){
        addition(a,b)
    }
    else if (operation === '×'){
        multyply(a,b)
    }
    else if (operation === '÷'){
        devide(a,b)
    }
}

console.log(operate(Number(1), Number(5), '+'))


function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function devide(a, b){
    return a / b;
}

function multyply(a, b){
    return a * b;
}

