var roster = [
    ["Number", "Name", "Position", "Points per Game"],
    [12, "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
    [9, "Ms. Buckets ", "Point Guard", [19, 0, 11, 22, 0]],
    [31, "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
    [7, "Sally Talls", "Power Forward ", [18, 29, 26, 31, 19]],
    [22, "MK DiBoux ", "Small Forward ", [11, 0, 23, 17, 0]]
]

var list = 'Number : '+roster[1][0]+' Name : '+roster[1][1]+' Position : '+roster[1][2]+' Points per Game '+roster[1][3]
var list2 = 'Number : '+roster[2][0]+' Name : '+roster[2][1]+' Position : '+roster[2][2]+' Points per Game '+roster[2][3]

function listIndexZero(index)
{
  var IndexZero =  {'Number':roster[index][0],'Name':roster[index][1],'Position':roster[index][2],'Points per Game':roster[index][3]}
  return IndexZero
}
function convert_roster_format(nestedArray) {
  var tampungRoster = []
    for(var i=1;i<=4;i++)
    {
      tampungRoster.push(listIndexZero(i))
    }
  return tampungRoster
}

 var object_roster = convert_roster_format(roster)
console.log(object_roster[2])
// // => { "Number": 31, "Name": "Harvey Kay", "Position": "Shooting Guard", "Points per Game": [0, 30, 16, 0, 25]
console.log(object_roster[0]['Name'] === 'Joe Schmo') // outputs true
