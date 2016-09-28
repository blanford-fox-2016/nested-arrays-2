function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var board = []
  for (var i=0; i<3; i++){
    board.push([])
  }
  for (var i=0; i<3; i++){
    for (var j =0; j<3; j++){
      board[i].push(xo_random[j])
    }
  }
  console.log(board);
}


function tic_tac_toe_random(){
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var board = []
  for (var i=0; i<3; i++){
    board.push([])
  }
  for (var i=0; i<3; i++){
    for (var j =0; j<3; j++){
      board[i].push(xo_random[Math.floor((Math.random()*8)+1)])
    }
  }
  console.log(board);
}

console.log(tic_tac_toe_board())
console.log(typeof(Math.random()));
console.log(tic_tac_toe_random()); // => make a random tic tic board
