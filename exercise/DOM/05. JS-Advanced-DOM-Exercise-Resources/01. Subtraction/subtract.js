function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value)
    let secondNum = Number(document.getElementById('secondNumber').value)
    let res =document.getElementById('result') 
    res.textContent =  (firstNum) - (secondNum);
}