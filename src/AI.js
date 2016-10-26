var square, circle;

function path1()
{
    // Create a Paper.js Path to draw a line into it:
		var line = new paper.Path();
        
		// Give the stroke a color
		line.strokeColor = 'black';
		var start = new paper.Point(0, 200);
		// Move to start and draw a line from there
		line.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		line.lineTo([ 700, 200 ]);
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
  
}