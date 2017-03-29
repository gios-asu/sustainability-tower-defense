var d = 0;
var tx, ty, ex, ey; // Turret and Enemy coordinates
var shooting;

function fire(index) {
  
  //alert($('#turret' + index).css('left'));
  
  tx = parseFloat($('#turret' + index).css('left'));
  ty = parseFloat($('#turret' + index).css('top'));
  
  var distance = 800;
  var closest = null;
  
  $('.enemy').each(function(index) {
    ex = parseFloat($(this).css('left'));
    ey = parseFloat($(this).css('top'))
    d = dist(tx, ty, ex, ey);
    if (d < distance) {
      distance = d;
      closest = $(this).attr('id');
    }
  });
  
  if (distance < parseInt($('#turret' + index).attr('data-range'))) {
    var dmg = parseInt($('#turret' + index).attr('data-damage'));
    var curHealth = parseInt($('#' + closest).attr('data-life'));
    if (curHealth <= dmg) {
      money+=20;
      $('.money').text(money.toString());
      $('#' + closest).remove();
      checkWinCondition();
    } else {
      $('#' + closest).attr('data-life', curHealth - dmg);
      $('#' + closest).css('filter', 'invert(1)');
      setTimeout(function() {
        $('#' + closest).css('filter', 'invert(0)');
      }, 200);
      var ang = Math.round(Math.atan2(ty - ey, tx - ex) * 180 / Math.PI);
      if (closest == "enemy0") {
        $('.debug').html('angle: ' + ang);
      }
      $('#turret' + index).css('transform', 'rotate(' + ang + 'deg)');
      
    }
  }
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

function initFiring(id) {
    setInterval(function() {
      fire(id);
    }, $('#turret' + id).attr('data-rate') * 1000);
}
