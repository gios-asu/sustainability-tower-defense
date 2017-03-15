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
  
  if (distance < $('#turret' + index).attr('data-range')) {
    var dmg = $('#turret' + index).attr('data-damage');
    var curHealth = $('#' + closest).attr('data-life');
    //alert('dmg is ' + dmg + ' and curHealth is ' + curHealth);
    if (curHealth <= dmg) {
      money+=10;
      $('.money').text(money.toString());
      $('#' + closest).remove();
    } else {
      $('#' + closest).attr('data-life', curHealth - dmg);
      if (closest == 'enemy0') {
        $('.debug').html(closest + ' life: ' + $('#' + closest).attr('data-life'));
      }
      
    }
  }
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

function initFiring(id) {
  id = id;
    setInterval(function() {
      fire(id);
    }, $('#turret' + id).attr('data-rate') * 1000);
}
