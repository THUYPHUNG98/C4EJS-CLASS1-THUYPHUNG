let belongingsArr = ['Backpack', 'MiBand watch', 'Ring'];
const add_btn = document.getElementById('add_button');
const input = document.getElementById('item_input');
const container = document.getElementById('container');
updateView();
add_btn.addEventListener('click', function() {
    let item = input.value;
    belongingsArr.push(item);
    updateView();
})
function updateView() {
    let listItems = document.getElementsByTagName('li');
    for(i = 0; i < listItems.length; i + 1) {
        listItems[i].remove();
    }
    for(let i = 0; i < belongingsArr.length; i++) {
        container.insertAdjacentHTML('beforeend', `<li>${belongingsArr[i]}<button onclick="removeLine(${i})">remove</button></li>`);
    }
}
function removeLine(i) {
    belongingsArr.splice(i, 1);
    updateView();
}