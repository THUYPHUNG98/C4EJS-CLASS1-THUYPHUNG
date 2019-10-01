console.log('a-------------');
for(let i = 0; i < 6; i++) {
    if(i < 3) {
        console.log('L');
    } else {
        console.log('H');
    }
}
console.log('b-------------');
let n1 = Number(prompt("Enter the total number of L's and H's"));
for(let i = 0; i < n1; i++) {
    if(i < Math.ceil(n1/2)) {
        console.log('L');
    } else {
        console.log('H');
    }
}
console.log('c-------------');
for(let i = 0; i < 8; i++) {
    if(i%2 == 0) {
        console.log(0);
    } else {
        console.log(1);
    }
}
console.log('d-------------');
let n2 = Number(prompt("Enter the total number of 1's and 0's"));
for(let i = 0; i < n2; i++) {
    if(i%2 == 0) {
        console.log(0);
    } else {
        console.log(1);
    }
}