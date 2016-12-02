fs = require('fs')


fs.readFile('test.dat', 'utf8', function (err,data) {
  if (err) {
    console.log(err);
  }
  findPincode(data);
});



function findPincode(data){
  const moves = {
    "U": [1,0],
    "D": [-1, 0],
    "L": [0, -1],
    "R": [1, 0]
  };

  const keys = [[1,2,3],[4,5,6],[7,8,9]];

  const startingPoint = [1,1];

  console.log("Moves: ", moves);
  console.log("Keys: ", keys);

  var position = [startingPoint[0], startingPoint[1]];


  var result = [];

  data.split("\n").forEach((line, index) => {
    if(!line)
      return;

    console.log("new key " + index)
    for (var x = 0; x < line.length; x++){

      const c = line.charAt(x);
      const currentMove = moves[c];

      if(withinLimits(currentMove, position, keys)){
        position = [position[0]+currentMove[0], position[1]+currentMove[1]];
      }else{
        console.log("out of limits");
      }
      console.log(position);
    }

      result.push("["+keys[position[0]][position[1]] +"]");
  });

  console.log("_____________" +result.toString() +"____________")
}

function withinLimits(move, position, keys){
  const yLimit = keys.length;
  const xLimit = keys[0].length;

  const newXPosition = position[0] + move[0];
  const newYPosition = position[1] + move[1];

  return (newXPosition >= 0 && newXPosition < xLimit) && (newYPosition >= 0 && newYPosition < yLimit);
}
