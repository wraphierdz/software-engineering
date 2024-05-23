// let area;
// let perimeter;
// function mode(){
//     document.getElementById('area').addEventListener('click', function() {
//         window.location.href = 'Luas.html';});
// }

// function getArea(){
    let alas = parseFloat(document.getElementById('a-input').value);
    let tinggi = parseFloat(document.getElementById('t-input').value);

//     if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0){
//         document.getElementById('luas').textContent = "Angka harus positif";
//         return;
//     }

    let luas = 0.5 * alas * tinggi;
    // document.getElementById('luas').textContent = 'L = ${luas}';
// }

// function showParam(){
//     document.getElementById('a-input').textContent = 'a = ${alas}';
//     document.getElementById('t-input').textContent = 't = ${tinggi}';
// }

element.addEventListener("click", getArea);

function getArea() {
  document.getElementById("calculate").innerHTML = "Luas = ${luas}";
}