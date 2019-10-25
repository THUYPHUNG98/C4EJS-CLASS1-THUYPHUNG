let itemsArr = [];
const add_btn = document.getElementById('add_btn');
const input = document.getElementById('input');
const container = document.getElementById('container');
add_btn.addEventListener('click', function() {
    let item = input.value;
    itemsArr.push(item);
    updateView();
})
function updateView() {
    let listItems = document.getElementsByTagName('li');
    for(i = 0; i < listItems.length; i + 1) {
        listItems[i].remove();
    }
    for(let i = 0; i < itemsArr.length; i++) {
        container.insertAdjacentHTML('beforeend', `<li>${itemsArr[i]}<button onclick="removeLine(${i})">remove</button></li>`);
    }
}
function removeLine(i) {
    itemsArr.splice(i, 1);
    updateView();
}