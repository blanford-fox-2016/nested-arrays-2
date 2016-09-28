function tic_tac_toe_board() {
  //var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]

var tic_tac_toe_board = []

    function kolom(){
      var column = []
    // var column = []

    for (var i=0; i<3; i++){
      var randomXO = Math.random();
      if(randomXO>0.5){
        column.push("O")
      }
      else if (randomXO<0.5) {
        column.push("X")
      }
    }
    return column
    }

for (var i = 0; i < 3; i++) {
  tic_tac_toe_board.push(kolom());
}

return tic_tac_toe_board
  }

console.log(tic_tac_toe_board()) // => make a random tic tic board
