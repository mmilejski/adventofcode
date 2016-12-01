var data = ["R5","L2","L1","R1","R3","R3","L3","R3","R4","L2","R4","L4","R4","R3","L2","L1","L1","R2","R4","R4","L4","R3","L2",
"R1",
"L4","R1","R3","L5","L4","L5","R3","L3","L1","L1","R4","R2","R2","L1","L4","R191","R5","L2","R46","R3","L1","R74","L2","R2","R187",
"R3","R4","R1","L4","L4","L2","R4","L5","R4","R3","L2","L1","R3","R3","R3","R1","R1","L4","R4","R1","R5","R2","R1","R3","L4","L2",
"L2","R1","L3","R1","R3","L5","L3","R5","R3","R4","L1","R3","R2","R1","R2","L4","L1","L1","R3","L3","R4","L2","L4","L5","L5","L4",
"R2","R5","L4","R4","L2","R3","L4","L3","L5","R5","L4","L2","R3","R5","R5","L1","L4","R3","L1","R2","L5","L1","R4","L1","R5","R1",
"L4","L4","L4","R4","R3","L5","R1","L3","R4","R3","L2","L1","R1","R2","R2","R2","L1","L1","L2","L5","L3","L1"];

var testData = ["L2", "L2", "L2", "L2", "L2"];

var testDataForFirst = ["R8", "R4", "R4", "R8"];

var facing = [1,0];
var position = [0,0];

function go(direction, pos, amount){
  var newPos = [];
  newPos[0] = pos[0] + (direction[0]);
  newPos[1] = pos[1] + (direction[1]);
  return newPos;
}

function turn(oldFacing, directionChar){

  var turns = [[1,0, "up"],[0,1,"right"],[-1,0,"down"],[0,-1,"left"]];
  var aroundDirection = directionChar==='R'?1:-1;

  var turnIndex = -1;
  turns.forEach(function(turn, index){
    if(turn[0] === oldFacing[0] && turn[1] === oldFacing[1]){
      turnIndex = index;
    }
  });

  if(turnIndex === 3 && directionChar === 'R'){
    turnIndex=0;
    console.log("Turning right around");
  } else if(turnIndex === 0 && directionChar === 'L'){
    turnIndex=3;
    console.log("Turning left around");
  } else{
    turnIndex=turnIndex+aroundDirection;
  }

  return turns[turnIndex];
}

var firstVisitedTwice;
var visitedLocations = {};

data.forEach(function(step){
  direction = step[0];
  distance = step.substring(1);


  console.log("Going " + step + " from " + position);
  facing = turn(facing, direction);
  console.log("Facing " + facing[2])

  for(var i = 0; i < distance ; i++){
    position = go(facing, position);

    var locationKey = position[0] + "," + position[1];

    if(!firstVisitedTwice && visitedLocations[locationKey]) {
      console.log("!!!!!!!!!!!!!!! VISITED TWICE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      firstVisitedTwice = [position[0], position[1]];
    }

    visitedLocations[locationKey] = 1;

    console.log("Moving: " + position);
  }
  console.log("Arrived at: " + position);
});


console.log("First location visited twice: " + firstVisitedTwice);
