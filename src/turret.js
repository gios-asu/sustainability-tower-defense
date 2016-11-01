function placeTurret(e){
    var circle = new Path.Circle({
        center: [event.clientX, event.clientY],
	    radius: 50,
	    fillColor: 'red'
    });
  
    circle.onMouseMove = function(event) {//follow mouse code
        this.position = event.point;
    }
    circle.onMouseDown = function(event){
        turret = new Path.Circle({
            center : [event.point.x, event.point.y],
            radius : 20,
            fillColor : 'blue'
        });
    }   
}
