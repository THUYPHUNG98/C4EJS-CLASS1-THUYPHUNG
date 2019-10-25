let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
btn1.addEventListener('click', function (e) {
    console.log(e.target);
});
btn2.addEventListener('click', function (e) {
    console.log(e.target);
});
let input = document.getElementById('ip1');
input.addEventListener('keydown', function (e) {
    console.log(e.key);
});