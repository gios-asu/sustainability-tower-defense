var $ = require("jquery");
var game_state = require("./game_state.js");

//$.getScript("./AI.js");
$("#buttonStart").click(function() {
  game_state.clickFunc();
});

$("#buttonInfo").click(function() {//change background to info background
  document.getElementById("bgimg").style.display = "none";
  document.getElementById("infoPage").style.display = "block";
});


$("#buttonExtra").click(function() {//change background to other background
  
  if(achCounter >= 2)
    alert("Stop it, get some help.");
  else
    achievementUnlocked("You clicked a button!");
  
});


$("#backHome").click(function() {
  document.getElementById("bgimg").style.display = "block";
  document.getElementById("infoPage").style.display = "none";
});

$("#dropB").click(function() {//ignore this function..
 document.getElementById("myDropdown").classList.toggle("show");
});

//INFO PAGE STUFF///
$("#howToPlay").click(function() {
  $("#infoTitle").text("How To Play");
 $("#infoText").html("<b> Controls:</b> <br> P - Pause <br> <br> <b>Objectives:</b> <br> Stop any oil bloobs from escaping the envioronment by placing Pew Pew, PaPa Pew, and Blob Stopper along its path. These turrets will attack the oil blobs, can you sustain the enviornment to destroy as many oil blobs as possible?");
});

$("#aboutSus").click(function() {
  $("#infoTitle").text("About The Game");
  $("#infoText").html("This game is similar to tower defense. The player will place the turret along the enemy path to destroy them. When the enemy reached its destination without dying the player will lose some health. Once the player's health reaches 0 then it is game over.");
});

$("#credits").click(function() {
  $("#infoTitle").text("Credits");
  $("#infoText").html("Daniel Y.: stuff <br> Jason C.: things <br> Sam F.: rest of stuff<br> Austin Z.: yes <br> Ryan R.: Sponsor ");

});


/////////////////////win/lose stuff//////////////////
$("#btnWinLoseQuit").click(function() {
  paused = false;
  window.location.reload();

});

$("#btnWinLosePlay").click(function() {
  document.getElementById("pauseMenu").style.visibility = "hidden";
  paused = false;
  location.reload();

});

$("#btnWinContinue").click(function() {
  document.getElementById("pauseMenu").style.visibility = "hidden";
  paused = false;
  alert("Next level coming soon!");

});

$("#btnWinQuit").click(function() {
  document.getElementById("pauseMenu").style.visibility = "hidden";
  paused = false;
  location.reload();

});
//////////////////////////////////////////////
