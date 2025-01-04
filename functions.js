function drawer()
{
	let y = 0;
	let x = 0;
	let i = 0;
	let j = 0;
	let div;
	while (i < map.length)
	{
		j = 0;
		while (j < map[i].length)
		{
			div = document.createElement("div");
			if (map[i][j] === 1)
			{
				div.classList.add("ground");
				game.appendChild(div);
				div.id = y.toString() + x.toString();
			}
			else if (map[i][j] === 0)
			{
				div.classList.add("path");
				div.id = y.toString() + x.toString();
				game.appendChild(div);
			}
			else if (map[i][j] === 2)
			{
				div.classList.add("door");
				div.id = y.toString() + x.toString();
				game.appendChild(div);
			}
			j++;
			x++;
		}
		x = 0;
		y++;
		i++;
	}
}

function player(a, position)
{
	let idl = document.getElementById(a);
	if (idl.classList == "ground")
	{

		if (position === 1)
			x--;
		else if (position === -1)
			x++;
		else if (position === 2)
			y--;
		else
			y++;
		return (true);
	}
	else if (idl.classList == "door")
	{
		idl.classList.remove("path");
		idl.classList.add("player");
		winers.classList.remove("win");
		winers.classList.add("show");
	}
	else
	{
		idl.classList.remove("path");
		idl.classList.add("player");
	}
	return (false);
}

function indexer(y, x)
{
	let result = y.toString() + x.toString();
	return(result);
}a
function fix_path(path)
{
	let get =  document.getElementById(path);
	get.classList.remove("player");
	get.classList.add("path");
}

function animate()
{
	setTimeout(()=>
	{
		let last_path = y;
		y++;
		is = player(indexer(y, x),2);
		if (is == false)
		{
			animate();
			fix_path(indexer(last_path, x));
		}
	}, 100)
	
}