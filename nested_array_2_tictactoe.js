function tic_tac_toe_board() {
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X","O"];
  var randomer = xo_random.length;
  var board = [[[],[],[]],
              [[],[],[]]
              ,[[],[],[]]
              ]
  for (var i = 0; i < 3; i++){
      for (var j = 0; j <3; j++){
        var rand = Math.floor((Math.random() * 10))
        // if (rand > 4){
        //   xo_random.splice(ini-1,1);
        //   var ini = xo_random.length;
        // } else if (rand < 5){
        //   xo_random.splice(0,1);
        //   var ini = 0;
        // }
        board[i][j] = xo_random[rand];
        // console.log(board[i][j])
      }
    }
  // var display = () => {
  //   for (var x = 0; x<board.length; x++){
  //     console.log(board[i])
  //   }
  // }
  // display()
  return board
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
