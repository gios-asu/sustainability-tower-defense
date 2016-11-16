// Enemy info
var level1Life = [10, 20];
var level1Damage = [5, 15]; // the damage for all enemies
var level1Speed = [1, 1.5]; // the speed for all enemies

// Spawning info
var level1Enemies = [1, 1, 2, 2]; // the sequence of enemies to be generated
var level1Times = [3, 5, 3, 0.5]; // the sequence of times in seconds in between each enemy generation. The first number determines how long a wait there is before the first enemy is spawned.

var controller = new Object(); // an object to control all global game vars
controller.health = 100;
controller.currency = 0;
controller.wave = 1;

var num = 0; // The enemy in the sequence we have just created, starting with the first.

function makeEnemy(type, level) {
  //future enemy object
  $('#lv1bgimg').append('<div class="enemy enemy' + type + ' level' + level + '" data-num="' + num + '" data-life="' + level1Life[type - 1] + '" data-damage="' + level1Damage[type - 1] + '" data-speed="' + level1Speed[type - 1] + '">');
  level1Path(num);
 
}

function level1Path(num) {
  $('.enemy').each(function() {
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
  });
}

function level1() {
  //$('#timer').html(level1Times[num]);
  makeEnemy(level1Enemies[num], 1);
  num += 1;
  if (num < level1Times.length) {
    setTimeout(level1, level1Times[num]*1000);
  }
    
}

function main() {
  if (level1Enemies.length != level1Times.length) {
    alert("DEV ERR: You need to have an equal number of times as you do enemies!");
  } else {
    setTimeout(level1, level1Times[num]*1000);
  }
}
