const game = document.querySelector(".screen");
const winers = document.querySelector(".win");
let y = 1;
let x = 2;
let ps = 0;
let is_ground;
let hight_jump = 0;
let map = 
[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,0,1,0,0,0,1,0,1,0,2,0,1,1,1],
	[1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1],
	[1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
let is;
drawer();
player(indexer(y,x));
document.body.addEventListener("keydown", (e)=>
{
	if (e.key === "d")
	{
		ps = x;
		x++;	
		is_ground = player(indexer(y,x), 1);
		if (is_ground == false)
			fix_path(indexer(y, ps));
	}
	else if (e.key === 'a')
	{
		ps = x;
		x--;
		is_ground = player(indexer(y, x),-1);
		if (is_ground == false)
			fix_path(indexer(y, ps));
	}
	else if (e.key === "w")
	{
		ps = y;
		hight_jump++;
		y -= 1;
		is_ground = player(indexer(y,x), -2);
		if (is_ground == false)
			fix_path(indexer(ps, x));
	}
	else if (e.key === 's')
	{
		ps = y;
		y++;
		is_ground = player(indexer(y,x),2);
		if (is_ground == false)
			fix_path(indexer(ps, x));
	}
});
