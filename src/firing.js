var d = 0;
var tx, ty, ex, ey; // Turret and Enemy coordinates
var shooting;

function fire(item, index) {
  ex = item.position.x;
  ey = item.position.y;
  shooting = false;
  turrets.forEach(shoot);
  if (shooting == true) {
    item.fillColor = 'red';
  } else {
    item.fillColor = 'blue';
  }
  
}

function shoot(item, index) {
    
  tx = item.position.x;
  ty = item.position.y;
  d = dist(tx, ty, ex, ey);
  if (d < 100) {
    shooting = true;
  }
  
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

function initFiring() {
  
  var firingTimer = setInterval(function() {
    enemies.forEach(fire);
  }, 5);
  
}
