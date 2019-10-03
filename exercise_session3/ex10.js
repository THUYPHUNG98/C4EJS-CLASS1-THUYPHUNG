let nameStr = prompt('Enter a sequence of names');
let nameArr = new Array();
nameArr = nameStr.split(',');
const mapArr = nameArr.map(x => '<' + x + '>');
let newNameStr = mapArr[0];
for(let i = 1; i < mapArr.length; i++) {
    newNameStr += `,${mapArr[i]}`;
}
alert(`${nameStr} => ${newNameStr}`); 