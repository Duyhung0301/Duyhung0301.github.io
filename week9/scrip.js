function calculate(operation) {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;

    if (num1 === '' || num2 === '') {
        alert('You need input number!');
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (operation === '/' && number2 === 0) {
        alert('Cannot divide by zero!');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}

function cleardata() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = 'Result: ';
}