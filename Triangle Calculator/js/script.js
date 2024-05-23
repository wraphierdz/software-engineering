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
        alert('Please enter valid positive numbers.');
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

//------------------------perimeter
function getPerimeter() {
    const base = parseFloat(document.getElementById('a-input').value);
    const height = parseFloat(document.getElementById('t-input').value);
    const displayElement = document.getElementById('input-display-peri');
    
    if (!isNaN(base) || !isNaN(height)) {
        displayElement.textContent = `a (alas) = ${base} | t (tinggi) = ${height}`;
    } else {
        displayElement.textContent = '';
    }
}

function calculatePerimeter() {
    const s1 = parseFloat(document.getElementById('s1').value);
    const s2 = parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);

    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
        alert('Please enter valid positive numbers');
        return;
    }

    const perimeter = s1+s2+s3;

    let resultDiv = document.getElementById('hasil');
    if (!resultDiv) {
        resultDiv = document.createElement('div');
        resultDiv.id = 'hasil';
        document.querySelector('.calculation').appendChild(resultDiv);
    }
    resultDiv.textContent = `L = ${area}`;
}

document.getElementById('s1').addEventListener('input', getPerimeter);
document.getElementById('s2').addEventListener('input', getPerimeter);
document.getElementById('s3').addEventListener('input', getPerimeter);

document.getElementById('calculate-peri').addEventListener('click', calculatePerimeter);
