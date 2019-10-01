console.log('a-----------------');
for(let i = 0; i < 7; i++) {
    console.log(i);
}
console.log('b-----------------');
let n = Number(prompt('Enter a number (cau b)'));
for(let i = 0; i < n; i++) {
    console.log(i);
}
console.log('c-----------------');
let n1 = Number(prompt('Enter n (cau c)'));
for(let i = 3; i < n1; i++) {
    console.log(i);
}
console.log('d-----------------');
let n2 = Number(prompt('Enter n (cau d)'));
let c = Number(prompt('Enter c (cau d)'));
for(let i = c; i < n2; i++) {
    console.log(i);
}
console.log('e-----------------');
let n3 = Number(prompt('Enter n (cau e)'));
let c1 = Number(prompt('Enter c (cau e)'));
for(let i = c1; i < n3; i += 3) {
    console.log(i);
}
console.log('f-----------------');
let n4 = Number(prompt('Enter n (cau f)'));
let c2 = Number(prompt('Enter c (cau f)'));
let s = Number(prompt('Enter s (cau f)'));
for(let i = c2; i < n4; i += s) {
    console.log(i);
}