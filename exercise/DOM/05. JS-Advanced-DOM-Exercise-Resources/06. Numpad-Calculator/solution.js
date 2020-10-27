function solve() {
    // Lets Get all the buttons in one Array:
    let buttons = document.querySelector('.keys').children;
    // Get the expression Output area:
    let expressionOutput = document.querySelector('#expressionOutput');
    // Get the Result Output area:
    let resultOutput = document.querySelector('#resultOutput');
    // Get the Clear button:
    let clearButton = document.querySelector('.clear');
    
    // Set the Listener in a loop for Expression:
    let expression = '';
    for (let i = 0; i < buttons.length; i++) {
        // Send the clicked link to our function:
        buttons[i].addEventListener("click", function() {
            if (!(buttons[i].value == '=')) {
                if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttons[i].value)) {
                    // Operand or decimal point is pressed:
                    expression += `${buttons[i].value}`
                    expressionOutput.innerText = expression;
                } else {
                    // Operator is pressed
                    expression += ` ${buttons[i].value} `;
                    expressionOutput.innerText = expression;
                }
            } else {
                // Equal Sign Pressed
                try {
                    let result = eval(expression);
                    resultOutput.innerText = result;
                } catch (error) {
                    resultOutput.innerText = 'NaN';
                }
            }
        
        })
    }

    // Set the listener for the Clear Button:
    clearButton.addEventListener('click', function() {
        // Big brush commin' :D
        resultOutput.innerText = '';
        expression = '';
        expressionOutput.innerText = '';
    })
}