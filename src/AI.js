// Enemy info
var level1Life = [10, 20];
var level1Damage = [5, 15]; // the damage for all enemies
var level1Speed = [1, 1.5]; // the speed for all enemies

// Spawning info
var level1Enemies = [1, 1, 2, 2]; // the sequence of enemies to be generated
var level1Times = [3, 3, 4, 1]; // the sequence of times in seconds in between each enemy generation. The first number determines how long a wait there is before the first enemy is spawned.

// Path info
var level1PathObj = [{x: 0, y: 55}, {x: 55, y: 55}, {x: 55, y: 470}, {x: 505, y: 470}, {x: 505, y: 230}, {x: 800, y: 230}];

var controller = new Object(); // an object to control all global game vars
controller.health = 100;
controller.currency = 0;
controller.wave = 1;

var num = 0; // The enemy in the sequence we have just created, starting with the first.

function makeEnemy(type, level) {
  //future enemy object
  $('#lv1bgimg').append('<div id="enemy' + num + '" class="enemy enemy' + type + ' level' + level + '" data-turns="1" data-life="' + level1Life[type - 1] + '" data-damage="' + level1Damage[type - 1] + '" data-speed="' + level1Speed[type - 1] + '">');
  level1Path(num);
 
}

function level1Path(num) {
  var turns = parseInt($('#enemy' + num).attr('data-turns'), 10);
  var myX = parseInt($('#enemy' + num).css('left'), 10);
  var myY = parseInt($('#enemy' + num).css('top'), 10);
  
  if (turns < level1PathObj.length) {
    
    var defaultTime = Math.sqrt(Math.pow(level1PathObj[turns].x - myX, 2) + Math.pow(level1PathObj[turns].y - myY, 2)) * 5;
    
    $('#enemy' + num).animate({'left': level1PathObj[turns].x, 'top': level1PathObj[turns].y}, defaultTime / $('#enemy' + num).attr('data-speed'), 'linear', function() {
      $('#enemy' + num).attr('data-turns', turns + 1);
      level1Path(num);
    });
  } else {
    // reached the end
    
    controller.health -= $('#enemy' + num).attr('data-damage');
    $('#health').html(controller.health);

    $('#enemy' + num).remove();
  }
  
  /*$('.enemy').each(function() {
    if ($(this).attr('data-num') == num) {
      $(this).animate({'left': '500'}, 2500 / $(this).attr('data-speed'), 'linear', function() {
        $(this).animate({'top': '200'}, 1500 / $(this).attr('data-speed'), 'linear', function() {
          $(this).animate({'top': '0', 'left': '0'}, 2690 / $(this).attr('data-speed'), 'linear', function() {
            
            controller.health -= $(this).attr('data-damage');
            $('#health').html(controller.health);
            
            $(this).remove();
            
          });
        });
      });
    }
  });*/
}

function level1() {
  //$('#timer').html(level1Times[num]);
  makeEnemy(level1Enemies[num], 1);
  num += 1;
  if (num <= level1Times.length) {
    setTimeout(level1, level1Times[num]*1000);
  }
    
}

// creates blocker div elements along path to prevent turret placement

function blockPath() {
  
  $.each(level1PathObj, function(index, item) {
    
    if (index < level1PathObj.length - 1) { // all but the last element
      var blockerWidth = Math.abs((item.x + 64) - (level1PathObj[index + 1].x - 64));
      var blockerHeight = Math.abs((item.y + 64) - (level1PathObj[index + 1].y - 64));
      
      var xPlacement = -32;
      var yPlacement = ((item.y + level1PathObj[index + 1].y) / 2);
            
      var angle = 0;
      
      if (blockerWidth > 64 && blockerHeight > 64) {
        if (blockerWidth > blockerHeight) {
          angle = Math.atan2(blockerHeight, blockerWidth);
                    
          $('#lv1bgimg').append("<div class='blocker' style='width: " + blockerWidth + "px; height: 64px; -ms-transform: rotate(" + angle + "deg); -webkit-transform: rotate(" + angle + "deg); transform: rotate(" + angle + "deg);'></div>");
          
        } else if (blockerWidth < blockerHeight) {
          angle = Math.atan2(blockerHeight, blockerWidth);
                    
          $('#lv1bgimg').append("<div class='blocker' style='width: " + blockerWidth + "px; height: 64px; -ms-transform: rotate(" + angle + "deg); -webkit-transform: rotate(" + angle + "deg); transform: rotate(" + angle + "deg); top: " + yPlacement + "; left: " + xPlacement + ";'></div>");
        } else {
          // rotate 45 degrees and use either size
          angle = 45;
                    
          $('#lv1bgimg').append("<div class='blocker' style='width: " + blockerWidth + "px; height: 64px; -ms-transform: rotate(" + angle + "deg); -webkit-transform: rotate(" + angle + "deg); transform: rotate(" + angle + "deg); top: " + yPlacement + "; left: " + xPlacement + ";'></div>");
        }
        
      }
      
    }
    
  });
  
}

function main() {
  //Pause game stuff ////////////
  $(document).bind("keydown", function(e){
    console.log(e);
    if(e.keyCode == 80){// P key
      
      if(document.getElementById("pauseMenu").style.visibility == "hidden"){
        document.getElementById("pauseMenu").style.visibility = "visible";
        paused = true;
      }
      else{
        document.getElementById("pauseMenu").style.visibility = "hidden";
        paused = false;
      }
    }
     if(e.keyCode == 27 && paused)// escape key && currently paused
      {
        document.getElementById("pauseMenu").style.visibility = "hidden";
        document.getElementById("bgimg").style.display = "block";
        document.getElementById("lv1").style.display = "none";
        paused = false;
      }
  });
  ////pause game stuff ^////////
  
  
  if (level1Enemies.length != level1Times.length) {
    alert("DEV ERR: You need to have an equal number of times as you do enemies!");
  } else {
    setTimeout(level1, level1Times[num]*1000);
    //blockPath(); Save for future version
    
    $('.blocker').mouseenter(function() {
      if (placing != "0") {
        $('#lv1bgimg').css('cursor', 'url(img/placement/reds/' + placing + '.png) 16 16, auto');
        placeable = false;
      }
    }).mouseleave(function() {
      if (placing != "0") {
        $('#lv1bgimg').css('cursor', 'url(img/placement/' + placing + '.png) 16 16, auto');
        placeable = true;
      }
    });
  }
}
