var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    ["9", "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    ["7", "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    ["22", "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]

// [[roster[0][0], roster[1][0]], [roster[0][1], roster[1][1]],...

function convert_roster_format(nestedArray) {
    var arrObj = [];
    // your convert code here
    for (var i = 0; i < nestedArray.length; i++) {
      if (i > 0) {
        var obj = {};
        for (var j = 0; j < nestedArray[i].length; j++) {
          var prop = nestedArray[0][j];
          obj[prop] = nestedArray[i][j];
        }
        arrObj.push(obj);
      }
    }
    // roster.splice(roster.length, 1);
    return arrObj;
}

var object_roster = convert_roster_format(roster)

//SHOWING ALL OBJECT
console.log("=======ALL PLAYERS=======");
console.log(object_roster);
console.log("=======ALL PLAYERS=======");

console.log("\n");

console.log("---Testing---");

console.log(object_roster[2])

// => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }

console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
