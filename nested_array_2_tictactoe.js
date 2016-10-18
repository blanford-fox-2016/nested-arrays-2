function tic_tac_toe_board() {
  // var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  // var random = Math.floor((Math.random() * 2) +1)
  var board = []
  var table = []
  let tictactoe = () =>{
    for(var i = 0; i < 3; i++){
      var random = Math.random()
      if(random > 0.5){
        table.push("O")
      }else if (random < 0.5) {
        table.push("X")
      }
    }
    return table
  }
  for(var i = 0; i < 3; i++){
    board.push(tictactoe())
  }
  return board
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
