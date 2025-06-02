document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalsButton = document.getElementById('equals');
    const clearButton = document.getElementById('clear');

    let currentInput = '0';
    let previousInput = '';
    let operator = null;
    let shouldResetDisplay = false; 

    function updateDisplay() {
        display.value = currentInput;
    }

    function appendNumber(number) {
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else if (shouldResetDisplay) {
            currentInput = number;
            shouldResetDisplay = false;
        } else {
           
            if (number === '.' && currentInput.includes('.')) return;
            currentInput += number;
        }
        updateDisplay();
    }

    function chooseOperator(op) {
        if (currentInput === '' && previousInput === '') return;
      
        if (operator && !shouldResetDisplay && currentInput !== '') {
            calculate();
        }
        
        operator = op;
        previousInput = currentInput;
        shouldResetDisplay = true; 
    
    }

    function calculate() {
        if (!operator || previousInput === '' || (currentInput === '' && !shouldResetDisplay)) {
          
            return; 
        }

        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) {
            clearAll();
            currentInput = "Error";
            updateDisplay();
            shouldResetDisplay = true;
            return;
        }

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    result = "Error"; 
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        operator = null; 
        previousInput = ''; 
        shouldResetDisplay = true; 
        updateDisplay();
    }

    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operator = null;
        shouldResetDisplay = false;
        updateDisplay();
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.dataset.number);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            chooseOperator(button.dataset.operator);
        });
    });

    equalsButton.addEventListener('click', calculate);
    clearButton.addEventListener('click', clearAll);


    updateDisplay();
});