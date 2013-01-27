function cpuPick()
{	
    var chars="rps" ;
    var rchar = Math.floor(Math.random() * chars.length) ;
    cpu_pick = chars.substring(rchar, rchar+1) ;
    compare() ;
}

function userPick(clicked_id)
{
	switch(clicked_id)
	{
		case "rockBtn" : user_pick = 'r' ; break ;
		case "paperBtn" : user_pick = 'p' ; break ;
		case "scissorBtn" : user_pick = 's' ; break ;
	}
	cpuPick() ;
}

function compare(){
	var uscore = parseInt(document.getElementById("uscore").innerHTML) ;
	var cscore = parseInt(document.getElementById("cscore").innerHTML) ;
	if(user_pick == 'r')
	{
		if(cpu_pick == 's')
			uscore += 1;
		if (cpu_pick == 'p')
			cscore += 1;
	}
	
	else if(user_pick == 'p')
	{
		if(cpu_pick == 'r')
			uscore += 1;
		if (cpu_pick == 's')
			cscore += 1;
	}
	
	 else if(user_pick == 's')
	{
		if(cpu_pick == 'p')
			uscore += 1;
		if (cpu_pick == 'r')
			cscore += 1;
	}


	switch(user_pick)
	{
		case 'r' : udisplay="Rock"; break;
		case 'p' : udisplay="Paper"; break;
		case 's' : udisplay="Scissors"; break;
	}

	switch(cpu_pick)
	{
		case 'r' : cdisplay="Rock"; break;
		case 'p' : cdisplay="Paper"; break;
		case 's' : cdisplay="Scissors"; break;
	}


	document.getElementById("uscore").innerHTML = uscore ;
	document.getElementById("cscore").innerHTML = cscore ;
	document.getElementById("uChoice").innerHTML = udisplay;
	document.getElementById("cChoice").innerHTML = cdisplay ;
}