
function tic_tac_toe_board(){
  var array = [[],[],[]]
  var xo_random = ["X", "O", "X", "O", "X", "O", "X", "O", "X"]

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var randomIn = Math.floor(Math.random()*8)+1;
      if (array[i][j-1] === xo_random[randomIn]) {
        array[i][j] = xo_random[randomIn-1];
      }else {
          array[i][j] = xo_random[randomIn];
      }
    }
  }
  return array
}
// 
// function print(){
//   var result = tic_tac_toe_board();
//   console.log(result);
//   var hasil = []
//   for (var i = 0; i < 3; i++) {
//     if (!hasil[i]===result[i]) {
//       hasil.push(result[i])
//     }else {
//       hasil.push(result[i+1])
//     }
//   }
//   return hasil
// }
// console.log(print());
console.log(tic_tac_toe_board()) // => make a random tic tic board
