function tic_tac_toe_board() {
  var xo_random = [];//["X", "O", "X", "O", "X", "O", "X", "O", "X"]
  var pertama = "x";
  var kedua = "o";
  var panjang = 9
  for(var i =0; i<panjang;i++){
    xo_random.push(pertama,kedua)

  }

  //xo_random = xo_random.pop();
  var letter_gird = []
  var i,j,chunk=3
  for(i=0,j=xo_random.length;i<j;i+=chunk){
    letter_gird.push(xo_random.slice(i,i+=chunk))
    //delete.letter_gird(letter_gird[0])
  }
  return letter_gird;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
