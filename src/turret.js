// Enemy info
var level1TDamage = [10]; // the damage for all turrets
var level1TRange = [200]; // the range for all turrets
var level1TRate = [1]; // time in between shots for turrets in seconds

var placing = "0"; // default, means we aren't placing anything
var placingID = -1;
var placeable = true;
var numTurrets = 0; // number of turrets on map

$("#turretBT").mouseover(function(){
    $('.description').show();
});

$("#turretBT").mouseleave(function(){
    $('.description').hide();
});

function place(type, id) {
  placing = type;
  placingID = id;
  $('#lv1bgimg').css('cursor', 'url(img/placement/' + type + '.png) 16 16, auto');
  $('.gridslot').show();
  
}

$('#lv1bgimg').click(function(event) {
  if (placing != "0" && placeable == true) {
    $(this).append('<div id="turret' + numTurrets + '" class="turret ' + placing + ' level1" data-num="' + numTurrets + '" data-damage="' + level1TDamage[placingID - 1] + '" data-range="' + level1TRange[placingID - 1] + '" data-rate="' + level1TRate[placingID - 1] + '">');
    var x = event.pageX - $('#lv1bgimg').offset().left;
    var y = event.pageY - $('#lv1bgimg').offset().top;
    var xx = Math.floor((x) / 40);
    var yy = Math.floor((y) / 40);
    grid[xx][yy] = placing;
    $('#turret' + numTurrets).css('left', xx * 40 + 4).css('top', yy * 40 + 4);
    placing = "0";
    placingID = -1;
    $('#lv1bgimg').css('cursor', 'default');
    numTurrets += 1;
    $('.gridslot').hide();
  }
});

$('#lv1bgimg').mousemove(function(event) {
  if (placing != "0") {
    var x = event.pageX - $('#lv1bgimg').offset().left;
    var xx = Math.floor(x / 40);
    var y = event.pageY - $('#lv1bgimg').offset().top;
    var yy = Math.floor(y / 40);
    
    $('.gridslot').css('left', xx * 40 + $('#lv1bgimg').offset().left  - $(window).scrollLeft()).css('top', yy * 40 + $('#lv1bgimg').offset().top - $(window).scrollTop());
    
    // debugging
   $('.debug').html(xx + ", " + yy);
    
    if (grid[xx][yy] != "empty" || xx < 0 || yy < 0 || xx >= 20 || yy >= 20) {
      $('#lv1bgimg').css('cursor', 'url(img/placement/reds/' + placing + '.png) 16 16, auto');
      $('.gridslot').css('background-color', 'rgba(255,0,0,0.5)');
      placeable = false;
    } else {
      $('#lv1bgimg').css('cursor', 'url(img/placement/' + placing + '.png) 16 16, auto');
      $('.gridslot').css('background-color', 'rgba(0,255,0,0.5)');
      placeable = true;
    }
  }
  
});

function cursorX(event) {
  return event.clientX;
}

function cursorY(event) {
  return event.clientY;
}
