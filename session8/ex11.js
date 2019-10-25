let btn = document.getElementById('btn1');
let input = document.getElementById('name_input');
let result = document.getElementById('result_div')
console.log(btn);
console.log(input);
console.log(result);

btn.addEventListener('click', function (e) {
    console.log(`${btn.textContent} just clicked`);
    console.log(`User's name: ${input.value}`);
    console.log(`User's name uppercase: ${input.value.toUpperCase()}`);
    result.textContent = `${input.value.toUpperCase()}`;
});

