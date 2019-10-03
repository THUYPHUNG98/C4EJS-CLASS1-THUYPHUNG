const arr = [1, 35, 16, 8, 21, 100, 27];
let x = Number(prompt('Enter a number'));
let index = 0;
let found = 0;
for(let i = 0; i < arr.length; i++) {
    if(x == arr[i]) {
        found = 1;
        index = i;
    }
}
if(found == 1) {
    alert(`${x} is FOUND in my array at index ${index}`);
} else {
    alert(`${x} is NOT found in my array`);
}