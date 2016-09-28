var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
];

// I still confuse about the scope of of variable

function index(i) {
  var mini_obj = {
    "Number": roster[i][0],
    "Name": roster[i][1],
    "Position": roster[i][2],
    "Points per Game": roster[i][3]
  }
  return mini_obj;
}


function convert_roster_format(arr) {
  var result = {}
  for (var i = 0; i < arr.length; i += 1) {
    result[i] = index(i);
  }
  return result;
}


// console.log(toObject([12, "aga", "cent", [1,2,3,4]]));

// Testing
console.log(convert_roster_format(roster)[1]["Name"]);

// var object_roster = convert_roster_format(roster)
// console.log(object_roster[2])

// // => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
//
// console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
