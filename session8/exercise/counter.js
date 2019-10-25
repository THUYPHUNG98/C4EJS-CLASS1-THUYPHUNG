const count_down = document.getElementById('down_btn');
const count_up = document.getElementById('up_btn');
const counter = document.getElementById('counter');
count_down.addEventListener('click', function () {
    let number = Number(counter.textContent);
    counter.textContent = number - 1;
});
count_up.addEventListener('click', function () {
    let number = Number(counter.textContent);
    counter.textContent = number + 1;
});