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
    // your convert code here

    var arr = []
    var data = []
    var obj = []
    var title = []
    for (var i = 0; i < nestedArray.length; i++) {
      if(i == 0){
        title.push(nestedArray[0][0])
        title.push(nestedArray[0][1])
        title.push(nestedArray[0][2])
        title.push(nestedArray[0][3])
      }else {
        data = nestedArray[i]
        obj[title[0]] = data[0]
        obj[title[1]] = data[1]
        obj[title[2]] = data[2]
        obj[title[3]] = data[3]
      }
      arr.push(obj)
    }
    return arr
}

console.log(convert_roster_format(roster))
//
// var object_roster = convert_roster_format(roster)
// console.log(object_roster[2])
//
// // => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25] }
//
// console.log(object_roster[0]["Name"] == "Joe Schmo") // outputs true
