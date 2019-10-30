const API_URL = 'https://sheetdb.io/api/v1/f3bgn9245ga8k';
function id() {
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substr(2, 9);
    return z;
};
function setEvent() {
    const add_btn = document.getElementById('add_button');
    readItems();
    add_btn.addEventListener('click', function() {
        const input = document.getElementById('item_input').value;
        addItem(input);
    });
};
async function readItems() {
    const conn = await fetch(API_URL);
    const data = await conn.json();
    // let listItems = document.getElementsByTagName('li');
    // for(i = 0; i < listItems.length; i+1) {
    //     listItems[i].remove();
    // }
    const container = document.getElementById('container');
    for(let i = 0; i < data.length; i++) {
        container.insertAdjacentHTML('beforeend', `<li>${data[i].name}<button onclick="delItem(${data[i].id})">x</button></li>`);
    }
};
async function addItem(input) {
    const z = id();
    const newItem = {
        id: z,
        name: input
    };
    const body = {
        data: [
            newItem
        ]
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json',
        }
    };
    const conn = await fetch(API_URL, options);
    const data = await conn.json();
};
// async function delItem(id) {
//     const delAPI_URL = API_URL + `/id/${id}`;
//     const conn = await fetch(delAPI_URL, 'DELETE');
//     console.log('done');
    
//     //const data = await conn.json();
//     readItems();
// }
setEvent();