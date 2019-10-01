let n = Number(prompt('Enter number of polygons'));
for(let i = 0; i < n; i++) {
	for(let j = 0; j < 3 + i; j++) {
    	fd(50);
    	rt(360/(3 +i));
    }
}