const time_input = document.getElementById('time_input');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
let display = document.getElementById('display');
start_btn.addEventListener('click', function() {
    display.textContent = time_input.value;
    setInterval(count_down, 1000);
});
function count_down() {
    if(Number(display.textContent) == 0) {
        display.textContent = "Time's up!";
    } else if(display.textContent == "Time's up!") {
        clearInterval(count_down);
    } else if(display.textContent == 'Stopped!') {
        clearInterval(count_down);
    } else {
        display.textContent = Number(display.textContent) - 1;
    }
}
stop_btn.addEventListener('click', function() {
    display.textContent = 'Stopped!';
})