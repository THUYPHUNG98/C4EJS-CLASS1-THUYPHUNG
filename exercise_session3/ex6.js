let seqOfNumbers = prompt('Enter a sequence of numbers separated by commas');
let numbersArr = new Array();
numbersArr = seqOfNumbers.split(',');
let smallestNum = Number(numbersArr[0]);
for(let i = 1; i < numbersArr.length; i++) {
    if(smallestNum > Number(numbersArr[i])) {
        smallestNum = Number(numbersArr[i]);
    }
}
alert(`The smallest of them is ${smallestNum}`);