//1:
let num = (Math.random()).toFixed(2);
console.log(num);
//2:
let myArr = ['thuy', 'le', 'yen'];
let ranItem = myArr[Math.floor(Math.random()*myArr.length)];
console.log(ranItem);
//3:
let quizzesList = [
    {
        question: '5+2=?',
        choices: [7, 5, 6, 3],
        answer: 7,
    },
    {
        question: 'What is the capital of Vietnam?',
        choices: ['Hanoi', 'HCM', 'Da Nang', 'Hai Phong'],
        answer: 'Hanoi',
    },
    {
        question: 'x = 2, x^2 = ?',
        choices: [6, 8, 16, 4],
        answer: 4,
    },
    {
        question: 'Which sweet food made by bees using nectar from flowers?',
        choices: ['Bread', 'Honey', 'Sugar', 'Potent'],
        answer: 'Honey',
    }
];
//4+5+6:
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let n = 0;
let len = quizzesList.length;
let point = 0;
while (n < len) {
    let index = Math.floor(Math.random()*quizzesList.length);
    let quizze = quizzesList[index];
    console.log(quizze);
    let choiceStr = quizze.question;
    shuffle(quizze.choices);
    for(let i = 0; i < quizze.choices.length; i++) {
        choiceStr += `\n${i + 1}. ${quizze.choices[i]}`;
    }
    let userAnswer = Number(prompt(choiceStr));
    if(quizze.choices[userAnswer - 1] == quizze.answer) {
        alert('Bravo!');
        point += 1;
    } else {
        alert('Goodluck next time');
    }
    quizzesList.splice(index, 1);
    n ++;
}
alert('We are run out of question');
alert(`Your point is ${point}`);
//6:
