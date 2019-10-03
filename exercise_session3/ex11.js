let numStr = prompt('Enter a sequence of numbers');
let numArr = new Array();
numArr = numStr.split(',');
const filterArr = numArr.filter(x => x%2 != 0);
let newNumStr = filterArr[0];
for(let i = 1; i < filterArr.length; i++) {
    newNumStr += `,${filterArr[i]}`;
}
alert(`${numStr} => ${newNumStr}`); 