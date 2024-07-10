document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;

    if (isNaN(tempInput) || tempInput === '') {
        alert('Please enter a valid number');
        return;
    }

    const temperature = parseFloat(tempInput);
    let result;

    if (unitInput === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        result = `${temperature}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } else if (unitInput === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        result = `${temperature}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
    } else if (unitInput === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        result = `${temperature}K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById('resultText').innerText = result;
}
