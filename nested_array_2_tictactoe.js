function tic_tac_toe_board() {
  	var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
 	
	var xo_result = [];
	var random = 0;
	var countX = 0;
	var countO = 0;
	
	for(var i = 0 ; i < xo_random.length ; i++){
		if(xo_random[i] == "X"){
			countX++;
		}else if(xo_random[i] == "O"){
			countO++;
		}
	}
	
	var temp = []
	
	for(var i = 0 ; i < 3; i++){
		xo_result[i] = [];
		for(var j = 0 ; j < 3 ; j++){
			random = Math.floor(Math.random()*9);
			//xo_result[i].push(xo_random[3*i+j]);
			
			xo_result[i].push(xo_random[random]);
		}
	}
	return xo_result;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
