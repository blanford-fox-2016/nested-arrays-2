var roster = [
  ["Number", "Name", "Position", "Points per Game"],
  ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
  ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
  ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
  ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]],
  ["20", "Ale ale man", "Power Forward ", [11, 0, 23, 17, 0]]
]

console.log(roster.length)

// // [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function classObj(i) {
  var obj = {
    "Number": roster[i][0],
    "Name": roster[i][1],
    "Position": roster[i][2],
    "Points per Game": roster[i][3]
  }
  return obj;
}

function convert_roster_format() {
  // your convert code here
  let pemain = [];
  for (var i = 1; i <= roster.length - 1; i++) {
    pemain.push(classObj(i));
  }
  return pemain;
}

var object_roster = convert_roster_format(roster)
console.log(object_roster)
  //console.log(object_roster[2])
  //
  // // => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
  //
  // console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
  //
  //
  // var Obj = {
  //   "Number": 777,
  //   "Name": "Alexander",
  //   "Position": "Center",
  //   "Points": [14, 32, 7, 0, 23]
  // }
  //
  // var Obj2 = {
  //     "Number": 12,
  //     "Name": "Joe Schmo",
  //     "Position": "Center",
  //     "Points": [19, 0, 11, 22, 0]
  //   }
  //
  // var array = [Obj, Obj2];
  //
  // console.log(array[1]["Name"]);

// var array = [
//   [12, "alexander", "point"],
//   [14, "good", "center"]
// ];
// var iMaxNum = 1;
//
// // Set the length of the array to iMaxNum + 1.
// // The first array index is zero, not 1.
// var MultiplicationTable = new Array(iMaxNum);
//
// // Loop for each major number (each row in the table)
// for (var i = 0; i <= iMaxNum; i++) {
//   // Create the columns in the table
//   MultiplicationTable[i] = new Array();
//
//   // Fill the row with the results of the multiplication
//   for (var j = 0; j <= iMaxNum + 1; j++) {
//     MultiplicationTable[i][j] = array[i][j];
//   }
// }
//
// console.log(MultiplicationTable);

// }
//
// console.log(MultiplicationTable);

// }
//
// console.log(MultiplicationTable);

// }
//
// console.log(MultiplicationTable);
