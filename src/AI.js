var line, line2, line3, start;
var startx = [], starty = [], endx = [], endy = [];//array to keep track of point location 

function path1() {
  // Create a Paper.js Path to draw a line into it:
  startx.push(0);
  starty.push(400);
  endx.push(700);
  endy.push(400);
  line = new paper.Path(); 
  // Give the stroke a color
  line.strokeColor = 'black';
  start = new paper.Point(startx[0], starty[0]);
  // Move to start and draw a line from there
  line.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  line.lineTo([ endx[0], endy[0]]);
    
    //line2
  startx.push(700);//the end of line 1
  starty.push(400);//the end of line 1
  endx.push(700);
  endy.push(200);
  line2 = new paper.Path(); 
  line2.strokeColor = 'black';
  start = new paper.Point(startx[1], starty[1]);
  line2.moveTo(start);
  line2.lineTo([ endx[1], endy[1] ]);
    
   //line3 diagonal
  startx.push(700);//the end of line 2
  starty.push(200);//the end of line 2
  endx.push(0);
  endy.push(0);
  line3 = new paper.Path(); 
  line3.strokeColor = 'black';
  start = new paper.Point(startx[2], starty[2]);
  line3.moveTo(start);
  line3.lineTo([ endx[2], endy[2] ]);
    /*arc
  startx.push(700);
  starty.push(200);
  endx.push(500);
  endy.push(300);
  var from = new Point(startx[2],starty[2]);
  var through = new Point(450,200);
  var to = new Point(endx[2],endy[2]);
  line3 = new Path.Arc(from,through,to);
  line3.strokeColor = 'black';
  */
}


var enemy;
function makeCircle(start, end) {
  //future enemy object
  enemy = new Path.Circle({
    center: [start, end],
    radius: 20,
    fillColor: 'blue'
  });
}

////AI path following
function followPath(obj, st) {//(moving obj, st holds array index value)

  var steps = 200;//speed
  var dx = 0, dy=0;
  
  if (endx[st] - startx[st] != 0 && endy[st] -starty[st] == 0) {
    //move horizontal
    dx = (endx[st] - obj.position.x) / steps; //endpoint - obj position
    view.onFrame = function() {    
      // do the movement
      if(obj.position.x != endx[st]){
        obj.position.x += dx;
      }
      else {
        var check = st + 1;
        if (check <= startx.length-1) {
          //waits until animation comes to a stop to recursively call
          st++;
          followPath(obj,st);
        }
      }     
    }
  }
  //move vertical
  else if(endy[st] - starty[st] != 0 && endx[st] - startx[st] == 0) {
        //move vert
      dy = (endy[st] - obj.position.y)/steps; //endpoint - obj position
      view.onFrame = function() {    
          // do the movement
        if(obj.position.y != endy[st]) {
          obj.position.y += dy;
        }
          
        else {
            var check = st+1;
            if(check <=startx.length-1) {
              //waits until animation comes to a stop to recursively call
              st++;
              followPath(obj,st);
            }
          }   
      }
    }
  else {//move diagonal
    dx = (endx[st] - obj.position.x)/steps; //endpoint - obj position
    dy = (endy[st] - obj.position.y)/steps; //endpoint - obj position
    view.onFrame = function() {    
      // do the movement
      if(obj.position.y != endy[st]) {
        obj.position.y += dy;
        obj.position.x += dx;
      }
      else {
        var check = st+1;
        if(check <=startx.length-1) {//waits until animation comes to a stop to recursively call
          st++;
          followPath(obj,st);
        }
        else {
                //send some msg let system know an enemy breached the gates
        }
      }   
    }
  } 
}

function main() {//everything goes here
  path1();//draw path
  makeCircle(startx[0],starty[0]);//make obj
  followPath(enemy,0);//move obj
  //followMouse(); 
}
