const btn1 = document.querySelector('#num1')
const btn2 = document.querySelector('#num2')
const btn3 = document.querySelector('#num3')
const btn4 = document.querySelector('#num4')
const btn5 = document.querySelector('#num5')
const btn6 = document.querySelector('#num6')
const btn7 = document.querySelector('#num7')
const btn8 = document.querySelector('#num8')
const btn9 = document.querySelector('#num9')
const btnClear = document.querySelector('#numClear')
const btnPlus = document.querySelector('#numPlus')
const btnEqual = document.querySelector('#numEqual')
const btnSubtract = document.querySelector('#numSubtract')
const btnDevide = document.querySelector('#numDevide')
const btnMultyply = document.querySelector('#numMultyply')
const displayHeader = document.querySelector('#display-header')
const allBtn = document.querySelectorAll('.btn')
let finalAnswer = 0;

// function add() {     
//     let totalAddition = 0;
//     displayHeader.textContent += '+'
//     const sumArray = displayHeader.textContent.split('+')
//     for (num of sumArray) {
//     totalAddition += num;
//     return totalAddition
//     }

// }
btnPlus.addEventListener('click', () => {
    let totalAddition = 0;
    displayHeader.textContent += '+'
    const sumArray = displayHeader.textContent.split('+')
    for (num of sumArray ) {
    totalAddition += Number(num);
    }
    console.log(totalAddition)
    return totalAddition;    
})

btnSubtract.addEventListener('click', () => {
    let totalSubtract = 0;
    displayHeader.textContent += '-'
    const subtractArray = displayHeader.textContent.split('-')
    totalSubtract += Number(subtractArray[0])
    for (let i = 1; i < subtractArray.length - 1; i++) {
    totalSubtract -= Number(subtractArray[i]);    
}
    console.log(finalAnswer)
    console.log(totalSubtract)        
    return totalSubtract; 
})



btnMultyply.addEventListener('click', () => {    
    let totalMultyply = 1;
    displayHeader.textContent += '×'
    const multyArray = displayHeader.textContent.split('×')
    for (num of multyArray) {
        multyArray.splice(multyArray.indexOf(''), 1)
        totalMultyply *= num;
    }
    console.log(totalMultyply)
    console.log(multyArray)
    return totalMultyply
})

btnDevide.addEventListener('click', () => {
    displayHeader.textContent += '÷'
    let devideArray = displayHeader.textContent
    for (let i = 0; i < devideArray.length; i++){
        devideArray[i] = displayHeader.textContent
    }
    devideArray = devideArray.split('÷')
    devideArray.splice(devideArray.indexOf(''), 1)
    console.log(devideArray)
    return devideArray;
})



function devided(array) {
    let currentNumber;
    for (let i = 0; i < array.length; i++) {
        currentNumber = Number(array[i])
        currentNumber /= Number(array[i+1])
    }
    console.log(array)
    return currentNumber;
}


btnEqual.addEventListener('click', () => {
    displayHeader.textContent = totalSubtract;

})


btn1.addEventListener('click', () => {
    displayHeader.textContent += '1'
})
btn2.addEventListener('click', () => {
    displayHeader.textContent += '2'
})
btn3.addEventListener('click', () => {
    displayHeader.textContent += '3'
})
btn4.addEventListener('click', () => {
    displayHeader.textContent += '4'
})
btn5.addEventListener('click', () => {
    displayHeader.textContent += '5'
})
btn6.addEventListener('click', () => {
    displayHeader.textContent += '6'
})
btn7.addEventListener('click', () => {
    displayHeader.textContent += '7'
})
btn8.addEventListener('click', () => {
    displayHeader.textContent += '8'
})
btn9.addEventListener('click', () => {
    displayHeader.textContent += '9'
})

btnClear.addEventListener('click', () => {
    displayHeader.textContent = ''
})










