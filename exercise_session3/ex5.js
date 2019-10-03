let seqOfNumbers = prompt('Enter a sequence of numbers separated by commas');
let numbersArr = new Array();
numbersArr = seqOfNumbers.split(',');
let sum = 0;
for(let i = 0; i < numbersArr.length; i++) {
    sum += Number(numbersArr[i]);
}
alert(`The sum of them is ${sum}`);