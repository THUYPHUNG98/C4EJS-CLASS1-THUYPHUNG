//example 1:
let a = 1;
let b = 2;
console.log(`${a}, ${b}`);
b = [a, a = b][0];
console.log(`${a}, ${b}`);
//example 2:
let x = 3;
let y = 4;
console.log(`${x}, ${y}`);
[x, y] = [y, x];
console.log(`${x}, ${y}`);
//example 3:
let c = 5;
let d = 6;
let tmp;
console.log(`${c}, ${d}`);
tmp = c;
c = d;
d = tmp;
console.log(`${c}, ${d}`);
//example 4:
let e = 7;
let f = 8;
console.log(`${e}, ${f}`);
e = e^f;
f = e^f;
e = e^f;
console.log(`${e}, ${f}`);
//example 5:
let m = 9;
let n = 10;
console.log(`${m}, ${n}`);
n=m+(m=n)-n;
console.log(`${m}, ${n}`);