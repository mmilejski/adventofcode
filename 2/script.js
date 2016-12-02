fs = require('fs')


fs.readFile('input.dat', 'utf8', function (err,data) {
  if (err) {
    console.log(err);
  }
  findPincode(data);
});



function findPincode(data){
  const moves = {
    "D": [1,0],
    "U": [-1, 0],
    "L": [0, -1],
    "R": [0, 1]
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

      console.log("Moving from "+ position + " key (" + currentKey(keys, position) +") going "  + c + " " + currentMove);

      if(withinLimits(currentMove, position, keys)){
        position = [position[0]+currentMove[0], position[1]+currentMove[1]];
        console.log("new position: " +  position + " key is: " + currentKey(keys, position));
      }else{
        console.log("out of limits, staying on pos", position);

      }
      console.log("_____________");
    }

      const resultingKey = currentKey(keys, position);
      console.log("key: " + resultingKey);
      result.push("["+resultingKey +"]");
  });

  console.log("_____________" +result.toString() +"____________")
}

function currentKey(keys, position){
  return keys[position[0]][position[1]];
}

function withinLimits(move, position, keys){
  const yLimit = keys.length;
  const xLimit = keys[0].length;

  const newXPosition = position[0] + move[0];
  const newYPosition = position[1] + move[1];

  return (newXPosition >= 0 && newXPosition < xLimit) && (newYPosition >= 0 && newYPosition < yLimit);
}
