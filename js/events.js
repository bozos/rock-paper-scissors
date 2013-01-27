
function rockClick()
{ 
    user_pick = 'r'; 
    cpuPick();
}

function paperClick()
{ 
    user_pick = 'p'; 
    cpuPick();
}

function scissorClick()
{ 
    user_pick = 's'; 
    cpuPick();
}

document.getElementById("rockBtn").addEventListener("click", rockClick, false); 

document.getElementById("paperBtn").addEventListener("click", paperClick, false); 
document.getElementById("scissorBtn").addEventListener("click", scissorClick, false); 
	
