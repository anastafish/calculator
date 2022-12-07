const buttons = document.querySelectorAll('.btn')
const display = document.querySelector('#display-header')
const operatorBtn = document.querySelectorAll('.operator-btn')
btnClear = document.querySelector('.btn-clear')
btnEqual = document.querySelector('.btn-equal')
let num1 = 0;
let num2 = 0;
let operator; 
let currentNumber = 0;
let total = 0;


btnEqual.addEventListener('click', () =>{
    num2 = currentNumber;
    if (total){
        display.textContent = operate(Number(total), Number(currentNumber), operator)
    }
    else if (num1 && num2 && operator){
        display.textContent = (operate(Number(num1),Number(num2),operator))
        total = display.textContent;
    }
} )

buttons.forEach(btn =>{
    btn.addEventListener('click', () => {
        if (btn.className != "btn-equal btn btn-primary"){
        display.textContent += btn.textContent;}
        if (num1 === 0){
        if (btn.className == "btn btn-primary"){
        currentNumber += btn.textContent;
    }
    }
        else {
            if (btn.className == "btn btn-primary"){
            currentNumber += btn.textContent;   
        }
            
        }        
        

    })
})

operatorBtn.forEach(operatorBtn =>{
    operatorBtn.addEventListener('click', () =>{
        num1 = currentNumber;
        operator = operatorBtn.textContent;
        currentNumber = 0;
})})

btnClear.addEventListener('click', () => {
    display.textContent = ''
    num1 = 0;
    num2 = 0;
    currentNumber = 0;
})


function operate(a, b, operation){
    if (operation === '-'){
        return a - b;
    }
    else if (operation === "+"){
        return a + b;
    }
    else if (operation === '×'){
        return a * b;
    }
    else if (operation === '÷'){
        return a / b;
    }
}
