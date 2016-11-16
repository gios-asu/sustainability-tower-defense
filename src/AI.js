var level1Damage = [5, 15]; // the damage for all enemies
var level1Speed = [1, 1.5]; // the speed for all enemies
var level1Enemies = [0, 0, 1, 1]; // the sequence of enemies to be generated
var level1Times = [3, 3, 2]; // the sequence of times in seconds in between each enemy generation

var controller = new Object(); // an object to control all global game vars
controller.health = 100;
controller.currency = 0;
controller.wave = 1;

var num = 1; // The enemy in the sequence we have just created, starting with the first.

function makeEnemy(type, level) {
  //future enemy object
  $('#lv1bgimg').append('<div class="enemy enemy' + (type + 1) + ' level' + level + '" data-num="' + num + '" data-life="100" data-damage="' + level1Damage[type] + '" data-speed="' + level1Speed[type] + '">');
  level1Path(num);
  
  num += 1;
 
}

function level1Path(num) {
  $('.enemy').each(function() {
    if ($(this).attr('data-num') == num) {
      $(this).animate({'left': '500'}, 2000 / $(this).attr('data-speed'), 'linear', function() {
        $(this).animate({'top': '200'}, 800 / $(this).attr('data-speed'), 'linear', function() {
          $(this).animate({'top': '0', 'left': '0'}, 538 / $(this).attr('data-speed'), 'linear', function() {
            controller.health -= $(this).attr('data-damage');
            $('#health').html(controller.health);
            
            if (num < level1Enemies.length) {
              makeEnemy(level1Enemies[num], 1);
            }
            
          });
        });
      });
    }
  });
}

function level1() {
  
  makeEnemy(level1Enemies[0], 1);
  
}

////AI path following
/*function followPath(obj, st) {//(moving obj, st holds array index value)

  var steps = 200;//speed
  var dx = 0, dy=0;
  
  if (endx[st] - startx[st] != 0 && endy[st] -starty[st] == 0) {
    //move horizontal
    dx = (endx[st] - obj.position.x) / steps; //endpoint - obj position
    view.onFrame = function() {    
      // do the movement
      if(obj.position.x != endx[st]){
        obj.position.x += dx;
      }
      else {
        var check = st + 1;
        if (check <= startx.length-1) {
          //waits until animation comes to a stop to recursively call
          st++;
          followPath(obj,st);
        }
      }     
    }
  }
  //move vertical
  else if(endy[st] - starty[st] != 0 && endx[st] - startx[st] == 0) {
        //move vert
      steps = 50;
      dy = (endy[st] - obj.position.y)/steps; //endpoint - obj position
      view.onFrame = function() {    
          // do the movement
        if(obj.position.y != endy[st]) {
          obj.position.y += dy;
        }
          
        else {
          var check = st+1;
          if(check <=startx.length-1) {
              //waits until animation comes to a stop to recursively call
            st++;
            followPath(obj,st);
          }
          else{
            reduceHP();//enemy hit the end of path. reduce hp
          }
        }   
      }
    }
  else {//move diagonal
    dx = (endx[st] - obj.position.x)/steps; //endpoint - obj position
    dy = (endy[st] - obj.position.y)/steps; //endpoint - obj position
    view.onFrame = function() {    
      // do the movement
      if(obj.position.y != endy[st]) {
        obj.position.y += dy;
        obj.position.x += dx;
      }
      else {
        var check = st+1;
        if(check <=startx.length-1) {//waits until animation comes to a stop to recursively call
          st++;
          followPath(obj,st);
        }
        else {//end of path
          //ghetto spawner
          enemy.remove();
          makeCircle(startx[0],starty[0]);//make obj
          followPath(enemy,0);
          //ghetto spawner ^
          reduceHP();//enemy hit the end of path. reduce hp
        }
      }   
    }
  } 
}
*/
function main() {//everything goes here
 // path1();//draw path
  level1();//make obj
  //followMouse(); 
}
