// Initiate main function that generates random tic tac toe board each time it is called

function tic_tac_toe_board(num) {
  var table = [];
  for (var i = 0; i < num; i += 1) {
    table[i] = [];
    for (var j = 0; j < num; j += 1) {
      table[i][j] = tic_tac_toe_random();
    }
  }
  return table;
}

// Make a function called tic tac toe random that generates random output
// whether it "X" or "0"
function tic_tac_toe_random() {
  var computer_random = Math.round(Math.random());
  return computer_random === 1 ? "X" : "0";
}

// Result
console.log(tic_tac_toe_board(15)) // => make a random tic tic board
