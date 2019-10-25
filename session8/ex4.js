// function myfunction() {
//     setTimeout(function () {
//         console.log('Heehaw');
//     myfunction();
//     }, 1000);
// };
// myfunction();

// setInterval(function() {
//     console.log('heehee!');
// }, 1000);
const container = document.getElementById('u1');
let liList = document.getElementsByTagName('li');
console.log(liList);
let n = liList.length;
for(let i = 0; i < n; i++) {
    if(liList[i].textContent == 'Articles') {
        container.insertAdjacentHTML('beforeend', `<li>${liList[i].textContent}</li>`);
    }
}
for(let i = 0; i < n; i++) {
    container.insertAdjacentHTML('beforeend', `<li>${liList[i].textContent}</li>`);
}

