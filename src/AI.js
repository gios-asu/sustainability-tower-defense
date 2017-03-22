// Enemy info
var level1Life = [100, 200];
var level1Damage = [20, 25]; // the damage for all enemies
var level1Speed = [0.3, 0.5]; // the speed for all enemies

// Spawning info
var level1Enemies = [1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]; // the sequence of enemies to be generated
var level1Times = [3, 1, 2, 1, 2, 3, 1, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1]; // the sequence of times in seconds in between each enemy generation. The first number determines how long a wait there is before the first enemy is spawned.

// Path info
var level1PathObj = [{x: 0, y: 55}, {x: 55, y: 55}, {x: 55, y: 470}, {x: 505, y: 470}, {x: 505, y: 230}, {x: 800, y: 230}];

//
var enemyCount = 0; // used in checking if all enemies have gone through the path
// Populate grid with path
grid[0][0] = "path";
grid[0][1] = "path";
grid[1][1] = "path";
grid[2][1] = "path";
for (var i = 2; i < 12; i++) {
  grid[1][i] = "path";
  grid[2][i] = "path";
}
for (var i = 2; i < 13; i++) {
  grid[i][11] = "path";
  grid[i][12] = "path";
}
for (var i = 10; i >= 5; i--) {

  grid[12][i] = "path";
  grid[13][i] = "path";
}
for (var i = 13; i < 20; i++) {
  grid[i][5] = "path";
  grid[i][6] = "path";
}

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
  } else if (!isNaN(turns)) {//health checker
    // reached the end
    controller.health -= 50;
    //controller.health -= $('#enemy' + num).attr('data-damage');
    $('#health').html(controller.health);
    
    ///display lose or win screen here
    if(controller.health <= 0){
      winLose = true;//used if win or lose. to stop pause from happening
      document.getElementById("loseScreen").style.visibility = "visible";
      document.getElementById("fadeIn").style.visibility = "visible";
      if(paused){//bug fix with removing pause menu
        document.getElementById("pauseMenu").style.visibility = "hidden";
        paused = false;
      }   
    }
    $('#enemy' + num).remove();
    //win should show when all enemies finish spawning and no enemy on the board
    enemyCount++;
    if(enemyCount >= level1Enemies.length && controller.health > 0)//you win when all enemies in the level has spawned and you have health > 0
      {
        winLose = true;
        youWin = true;// do something
        document.getElementById("winScreen").style.visibility = "visible";
        document.getElementById("fadeIn").style.visibility = "visible";
        if(paused){//bug fix with removing pause menu
          document.getElementById("pauseMenu").style.visibility = "hidden";
          paused = false;
        }   
      }
    
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
  //  alert(paused);
    num += 1;
    if (num <= (level1Times.length - 1)) {
        t = new Timer(level1, level1Times[num]*1000);
    }           
}


function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.stop = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.start = function() {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.start();
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
    if(e.keyCode == 80 && winLose == false){// P key
      
      if(document.getElementById("pauseMenu").style.visibility == "hidden"){
        document.getElementById("pauseMenu").style.visibility = "visible";
        paused = true;
      }
      else{
        document.getElementById("pauseMenu").style.visibility = "hidden";
        paused = false;
      }
    }
     if(paused || winLose)//  currently paused
      {
        if(e.keyCode == 27){//escape key 
           document.getElementById("pauseMenu").style.visibility = "hidden";
          document.getElementById("bgimg").style.display = "block";
          document.getElementById("lv1").style.display = "none";
          paused = false;
          window.location.reload();
        }
        else if(e.keyCode == 73 && !winLose){  // I for information
          $('#myModal').modal('toggle');//display modal
        }
      }
  });
  
  ////pause game stuff ^////////
  //to disable turret if the money is less than the cost     
  setInterval(function(){turretCheck();}, 1000); 
  
  if (level1Enemies.length != level1Times.length) {
    alert("DEV ERR: You need to have an equal number of times as you do enemies!");
  } else { 
      //t = new Timer(level1, level1Times[num]*1000);
      
    /*blockPath(); Save for future version
    
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
    });*/
  }
}
