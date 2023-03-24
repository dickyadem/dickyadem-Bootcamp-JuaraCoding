const form = document.querySelector('form');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const Hasil = document.querySelector('#hasil');
const Sgt = document.querySelector('#Luassgt');
const PJ = document.querySelector('#pj');

form.addEventListener('submit', function (event) {


    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let result1 = num1 + num2;
    let result2 = 0.5 * num1 * num2;
    let result3 = num1 * num2;
    Hasil.textContent = `Hasil: ${num1} + ${num2} = ${result1}`;
    Sgt.textContent = `Hasil:1 / 2 x ${num1} x ${num2} = ${result2}`;
    PJ.textContent = `Hasil: ${num1} x ${num2} = ${result3}`;

});

input1.addEventListener('keyup', function () {
    form.dispatchEvent(new Event('submit'));
});

input2.addEventListener('keyup', function () {
    form.dispatchEvent(new Event('submit'));
});