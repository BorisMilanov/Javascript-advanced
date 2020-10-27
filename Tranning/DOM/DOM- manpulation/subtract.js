function subtract() {
    let firstNumber = document.getElementById('firstNumber')
    let secondNumber = document.getElementById('secondNumber')
    let sum = Number(firstNumber.value) - Number(secondNumber.value);
    document.getElementById('result').textContent = Number(sum)

}