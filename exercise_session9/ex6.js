function calDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
}
const d = calDistance(3, 10, 0, 6);
if (d !== 5) {
console.log('Failed: the calculation is wrong');
} else {
console.log('Passed, bravo');
}