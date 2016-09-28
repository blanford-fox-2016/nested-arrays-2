var roster = [
  ["Number", "Name", "Position", "Points per Game"],
  ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
  ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
  ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
  ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]],
  ["20", "Ale ale man", "Power Forward ", [11, 0, 23, 17, 0]]
]
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
console.log(object_roster[2])
