function drawer()
{
	let y = 0;
	let x = 0;
	let i = 0;
	let j = 0;
	let ids = 0;
	let div;
	while (i < map.length)
	{
		// all map has id x = 0 y =0
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
			else
			{
				div.classList.add("path");
				div.id = y.toString() + x.toString();
				//div.id = ids;
				game.appendChild(div);
				//ids++;
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
}
function fix_path(path)
{
	let get =  document.getElementById(path);
	get.classList.remove("player");
	get.classList.add("path");
}