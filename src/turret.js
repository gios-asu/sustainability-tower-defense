// Enemy info
var level1TDamage = [20, 50]; // the damage for all turrets
var level1TRange = [100, 200]; // the range for all turrets
var level1TRate = [1, 1]; // time in between shots for turrets in seconds

var placing = "0"; // default, means we aren't placing anything
var placingID = -1;
var placeable = true;
var numTurrets = 0; // number of turrets on map

$('ul.turrets li div').each(function(){
    $(this).mouseover(function(){ 
        switch(this.id){
            case 'turretB1':
                $('.description').text(this.id + ": <cool turret info>")
                break;
            case 'turretB2':
                $('.description').text(this.id + ": <another cool turret info>")
                break;
            case 'turretB3':
                $('.description').text(this.id + ": <ultimate cool turret info>")
        }
         $('.description').show();
        
    });
     $(this).mouseleave(function(){
        console.log(this.id);
         $('.description').hide();
    });
    
});


function turretCheck(){ 
    if(money >= 50){ 
        $("#turretB1").css({"background-color" : "transparent", "pointerEvents" : "auto"}); 
    } 
    else{ 
        $("#turretB1").css({"background-color" : "black" , "pointerEvents" : "none"}); 
    } 
    if(money >= 100){ 
        $("#turretB2").css({"background-color" : "transparent", "pointerEvents" : "auto"}); 
    } 
    else{ 
        $("#turretB2").css({"background-color" : "black", "pointerEvents" : "none"}); 
    } 
    if(money >= 150){ 
         $("#turretB3").css({"background-color" : "transparent", "pointerEvents" : "auto"}); 
    } 
    else{ 
        $("#turretB3").css({"background-color" : "black", "pointerEvents" : "none"}); 
    } 
} 


function place(type, id) {
    switch (id){
        case 1: 
            cost = 50;
            break;
        case 2: 
            cost = 100;
            break;
        case 3: 
            cost = 150;
            break;
    }
  if(money >= cost){
      hasMoney = true;
  placing = type;
  placingID = id;
  $('#lv1bgimg').css('cursor', 'url(img/placement/' + type + '.png) 16 16, auto');
  $('.gridslot').show();
   }
}

$('#lv1bgimg').click(function(event) {  
  if (placing != "0" && placeable == true && hasMoney) {
    money-=cost;
    $('.money').text(money.toString());
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
    initFiring(numTurrets);
    numTurrets += 1;
    $('.gridslot').hide();
    if(numTurrets == 1)
      achievementUnlocked("FIRST TURRET PLACED!");// first turret achievement
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
   //$('.debug').html(xx + ", " + yy);
    
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
