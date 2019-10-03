clear();
const colors = ['red', 'grey', 'blue', 'purple', 'cyan'];
for(let i = 0; i < 5; i++) {
  	color(colors[i]);
	for(let j = 0; j < 4; j++) {
    	fd(25*i);
      	rt(90);
    }
}