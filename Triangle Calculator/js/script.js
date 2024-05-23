function updateInputs() {
    const base = parseFloat(document.getElementById('a-input').value);
    const height = parseFloat(document.getElementById('t-input').value);
    const displayElement = document.getElementById('input-display');
    
    if (!isNaN(base) || !isNaN(height)) {
        displayElement.textContent = `a (alas) = ${base} | t (tinggi) = ${height}`;
    } else {
        displayElement.textContent = '';
    }
}

function calculateArea() {
    const base = parseFloat(document.getElementById('a-input').value);
    const height = parseFloat(document.getElementById('t-input').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for base and height.');
        return;
    }

    const area = 0.5 * base * height;

    let resultDiv = document.getElementById('result');
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'result';
        document.querySelector('.calculation').appendChild(resultDiv);
    }
    resultDiv.textContent = `L = ${area}`;
}

document.getElementById('a-input').addEventListener('input', updateInputs);
document.getElementById('t-input').addEventListener('input', updateInputs);

document.getElementById('calculate').addEventListener('click', calculateArea);
