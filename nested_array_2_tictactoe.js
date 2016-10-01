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
  var flag = true;
  var countX = 0
  var countO = 0
  var tampungBoard = []
  for(var i=0;i<=2;i++)
  {
    tampungBoard.push(randomTictactoe())
  }
  for(var j=0;j<tampungBoard.length;j++){
    for(var i =0;i<tampungBoard.length;i++)
    {
      if(tampungBoard[j][i] === 'O')
      {
        countO++
      }else {
        countX++
      }
    }
  }

  if(countX < 4 || countO < 4){
    return tic_tac_toe_board()
  }else if(countO === 4 || countO === 5 || countX === 4 || countX ===5)
  {
    return tampungBoard
  }
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
