function dist(item, index) {
  alert(item.position.x);
}

function initFiring() {
  var newTurret = new Path.Circle({
    center : [20, 20],
    radius : 20,
    fillColor : 'blue'
  });
  
  turrets.push(newTurret);
  
  turrets.forEach(dist);
  
}
