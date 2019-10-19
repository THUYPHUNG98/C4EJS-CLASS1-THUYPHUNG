//15
clear();
setshape('rocket');
const pos = {
    x: 200,
    y: 50,
};
let {x, y} = pos;
penup();
rt(90);
fd(x);
lt(90);
fd(y);
pendown();
//16
clear();
setshape('rocket');
const pos = {
    x: 200,
    y: 50,
  	width: 20,
};
let {x, y, width: z} = pos;
penup();
rt(90);
fd(x);
lt(90);
fd(y);
pendown();
for(let i = 0; i < 4; i++) {
	fd(z);
  	rt(90);
}
//17
clear();
setshape('rocket');
const pos = {
    x: 200,
    y: 50,
  	width: 20,
  	height: 40,
};
let {x, y, width: z, height: t} = pos;
penup();
rt(90);
fd(x);
lt(90);
fd(y);
pendown();
for(let i = 0; i < 2; i++) {
	fd(t);
  	rt(90);
  	fd(z);
  	rt(90);
}
//18
clear();
const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
];
for(let i = 0; i < cmds.length; i++) {
    let {shape, penWidth: p, x, y, width: z, height: t} = cmds[i];
    if(p != null && p != undefined) {
  	    penwidth(p);
    } else {
  	    penwidth(4)
    }
    penup();
    rt(90);
    fd(x);
    lt(90);
    fd(y);
    pendown();
	if(shape == 'rect') {
        for(let i = 0; i < 2; i++) {
      	    fd(t);
            rt(90);
            fd(z);
            rt(90);
        }
    } else {
    	for(let i = 0; i < 4; i++) {
        	fd(z);
          	rt(90);
        }
    }
    home();
}