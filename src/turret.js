function placeTurret(x, y) {
  var turret = new Path.Circle({
    center : [x, y],
    radius : 20,
    fillColor : 'blue'
  });
}

function followMouse() {
  var map = document.getElementById('lv1bgimg');
  var r = map.getBoundingClientRect();
  $(document).mousemove(function (e) {
    if (e.pageX > r.left && e.pageX < r.right && e.pageY > r.top && e.pageY < r.bottom) {
      $("#turret").css({left: e.pageX-50, top: e.pageY-50});
    }
 
  });
  
  $(document).mousedown(function (e) {  
    if (e.pageX > r.left && e.pageX < r.right && e.pageY > r.top && e.pageY < r.bottom) {
      placeTurret(e.pageX - r.left, e.pageY - r.top);
    }
  });
}
