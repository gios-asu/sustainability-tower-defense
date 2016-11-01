var square, line;

function path1()
{
  // Get a reference to the canvas object
  paper.install(window);//needed to do animiation
  //var canvas = document.getElementById('myCanvas');
  paper.setup("myCanvas");
  // Create a Paper.js Path to draw a line into it:
  line = new paper.Path();
  // Give the stroke a color
  line.strokeColor = 'black';
  var start = new paper.Point(0, 400);
  // Move to start and draw a line from there
  line.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  line.lineTo([ 700, 400 ]);
}

function makeCircle(e)
{
  var circle = new Path.Circle({
    center: [event.clientX, event.clientY],
    radius: 70,
    fillColor: 'green'
  });
}

function makeRect()
{
  square = new Path.Rectangle([75, 75], [100, 100]);
  square.strokeColor = 'black'; 
}

function followPath(){
  var enemy = new Path.Circle({
    center: [25,line.position.y],
    radius: 20,
    fillColor: 'blue'
  });
  var steps = 200;
  var dx = 0;
  dx = (700 - enemy.position.x)/steps;
  view.onFrame = function(event) {
    // do the movement
    if(enemy.position.x != 700){
      enemy.position.x += dx;
    }
  }
}

function main()//everything goes here
{
  path1();
  makeRect();
  //makeCircle();
  view.onFrame = function(event) {
    // On each frame, rotate the path by 3 degrees:
    square.rotate(3);
    circle.fillColor.hue+=1;
  }
  placeTurret();
  followPath(); 
}


