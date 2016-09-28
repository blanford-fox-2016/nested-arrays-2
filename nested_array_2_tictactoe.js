function randomTictactoe()
{
  var tampungTicTac = []
  for(var i=0;i<=2;i++){
    if(Math.random() < 0.5)tampungTicTac[i] = 'X'
    else tampungTicTac[i] = 'O'
  }
  return tampungTicTac
}

function tic_tac_toe_board() {
  // var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var tampungBoard = []
  for(var i=0;i<=2;i++)
  {
    tampungBoard.push(randomTictactoe())
  }
  return tampungBoard
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
