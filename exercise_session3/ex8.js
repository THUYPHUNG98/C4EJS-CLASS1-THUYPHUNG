//8.1
let sheepSizes = [12, 34, 51, 100, 243, 29, 23, 78];
console.log(...sheepSizes);
//8.2
let maxsize = Math.max(...sheepSizes);
console.log(`\nNow my biggest sheep has size ${maxsize}, let's have it`);
//8.3
let index = sheepSizes.indexOf(maxsize);
sheepSizes[index] = 8;
console.log('\nAfter shearing, here is my flock:');
console.log(...sheepSizes);
//8.4 + 8.5
for(let i = 0; i < 4; i++) {
    console.log(`\nMONTH ${i + 1}`);
    for(let j = 0; j < sheepSizes.length; j++) {
        sheepSizes[j] += 50;
    }
    console.log('One month has passed, my sheep have grown, here are their sizes:');
    console.log(...sheepSizes);
    let maxsize = Math.max(...sheepSizes);
    console.log(`\nNow my biggest sheep has size ${maxsize}, let's have it`);
    let index = sheepSizes.indexOf(maxsize);
    sheepSizes[index] = 8;
    console.log('\nAfter shearing, here is my flock:');
    console.log(...sheepSizes);
}
//8.6
let totalSize = 0;
for(let i = 0; i < sheepSizes.length; i++) {
    totalSize += sheepSizes[i];
}
let money = totalSize*2;
console.log(`My flock has size in total: ${totalSize}\nI would get: ${totalSize} * 2$ = ${money}`);