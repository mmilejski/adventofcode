var data = ["R5","L2","L1","R1","R3","R3","L3","R3","R4","L2","R4","L4","R4","R3","L2","L1","L1","R2","R4","R4","L4","R3","L2","R1",
"L4","R1","R3","L5","L4","L5","R3","L3","L1","L1","R4","R2","R2","L1","L4","R191","R5","L2","R46","R3","L1","R74","L2","R2","R187",
"R3","R4","R1","L4","L4","L2","R4","L5","R4","R3","L2","L1","R3","R3","R3","R1","R1","L4","R4","R1","R5","R2","R1","R3","L4","L2",
"L2","R1","L3","R1","R3","L5","L3","R5","R3","R4","L1","R3","R2","R1","R2","L4","L1","L1","R3","L3","R4","L2","L4","L5","L5","L4",
"R2","R5","L4","R4","L2","R3","L4","L3","L5","R5","L4","L2","R3","R5","R5","L1","L4","R3","L1","R2","L5","L1","R4","L1","R5","R1",
"L4","L4","L4","R4","R3","L5","R1","L3","R4","R3","L2","L1","R1","R2","R2","R2","L1","L1","L2","L5","L3","L1"];

var testData = ["L2", "L2", "L2", "L2", "L2"];

var facing = [1,0];
var position = [0,0];

function go(direction, pos, amount){
  pos[0] += (direction[0] * amount);
  pos[1] += (direction[1] * amount);
}

function turn(oldFacing, directionChar){

  var turns = [[1,0],[0,1],[-1,0],[0,-1]];
  var aroundDirection = directionChar==='R'?1:-1;

  var turnIndex = -1;
  turns.forEach(function(turn, index){
    if(turn[0] === oldFacing[0] && turn[1] === oldFacing[1]){
      turnIndex = index;
    }
  });

  if(turnIndex === 3 && directionChar === 'R'){
    turnIndex=0;
  } else if(turnIndex === 0 && directionChar === 'L'){
    turnIndex=3;
  } else{
    turnIndex=turnIndex+aroundDirection;
  }

  return turns[turnIndex];
}

testData.forEach(function(step){
  direction = step[0];
  distance = step[1];

  facing = turn(facing, direction);

  go(facing, position, distance);

  console.log("I went " + step + " and now I am at " + position);

});

console.log("I'm here: " + position);
