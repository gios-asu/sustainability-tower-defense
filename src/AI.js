var square, circle, line;

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

function makeCircle()
{
    circle = new Path.Circle({
            center: [75, 75],
	        radius: 70,
	       fillColor: 'red'
        });
}

function makeRect()
{
    square = new Path.Rectangle([75, 75], [100, 100]);
		square.strokeColor = 'black';
    
   
}

function followPath(){
    var turret = new Path.Circle({
        center: [25,line.position.y],
        radius: 20,
        fillColor: 'blue'
    });
    var steps = 200;
    var dx = 0;
    dx = (700 - turret.position.x)/steps;
    view.onFrame = function(event) {
        
        
        // do the movement
        if(turret.position.x != 700){
        turret.position.x += dx;
        }
    }

 

    
}

function main()//everything goes here
{
    path1();
    makeRect();
    makeCircle();
     view.onFrame = function(event) {
			// On each frame, rotate the path by 3 degrees:
			square.rotate(3);
         circle.fillColor.hue+=1;
            
		}

    circle.onMouseMove = function(event) {//follow mouse code
    this.position = event.point;
    }
    followPath();
  
}