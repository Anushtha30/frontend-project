// script.js
function convertTemperature() {
    const inputValue = document.getElementById('inputValue').value;
    const conversionType = document.getElementById('conversionType').value;
    const resultElement = document.getElementById('result');

    if (inputValue === '') {
        resultElement.textContent = 'Please enter a temperature value.';
        return;
    }

    const temperature = parseFloat(inputValue);
    let result;

    if (conversionType === 'CtoF') {
        result = (temperature * 9/5) + 32;
        resultElement.textContent = `${temperature} °C = ${result.toFixed(2)} °F`;
    } else if (conversionType === 'FtoC') {
        result = (temperature - 32) * 5/9;
        resultElement.textContent = `${temperature} °F = ${result.toFixed(2)} °C`;
    } else {
        resultElement.textContent = 'Invalid conversion type.';
    }
}
