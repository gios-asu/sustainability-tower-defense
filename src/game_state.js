

module.exports = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },

  sayHelloInSpanish: function() {
    return "Hola";
  },
 
clickFunc: function(){// draw first level path design
    document.getElementById('bgimg').style.display = 'none';
    document.getElementById('lv1').style.display = 'block';
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
        
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(0, 50);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, 50 ]));
        
        makeCircle();//from function AI
        
		// Draw the view now:
		paper.view.draw();
	
   }

};



