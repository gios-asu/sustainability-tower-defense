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
      document.getElementById('range').style.display = 'block';
      $("#range").css({left: e.pageX-75, top: e.pageY-75});
    }
  });
  
  $(document).mousedown(function (e) {  
    if (e.pageX > r.left && e.pageX < r.right && e.pageY > r.top && e.pageY < r.bottom) {
      placeTurret(e.pageX - r.left, e.pageY - r.top);
    }
  });
}
