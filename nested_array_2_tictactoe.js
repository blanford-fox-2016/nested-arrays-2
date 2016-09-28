function randomXO() {
  var random = Math.random();
  if (random < 0.5) {
    return "O";
  } else {
    return "X";
  }
}

function array2d() {
  let tampung = [];
  for (var j = 0; j < 3; j++) {
    tampung = new Array(3)
  }
  return tampung;
}

function tic_tac_toe_board() {
  //var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]

  var tampung = [];

  for (var i = 0; i < 3; i++) {
    tampung.push(array2d());
  }


  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      tampung[i][j] = (randomXO());
    }
  }
  return tampung;
}

//console.log(tic_tac_toe_board()) // => make a random tic tic board
console.log(tic_tac_toe_board());

// error karena tampung belum di bikin tempatnya
// var tampung = [];
// tampung[0][0].push(1);
// console.log(tampung[0][0]);

//console.log(randomXO());
