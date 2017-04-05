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
 $("#infoText").html("<b> Controls:</b> <br> P - Info Menu <br> <br> <b>Objectives:</b> <br> Stop any oil bloobs from escaping the envioronment by placing Pew Pew, PaPa Pew, and Blob Stopper along its path. These turrets will attack the oil blobs, can you sustain the enviornment to destroy as many oil blobs as possible?");
});

$("#aboutSus").click(function() {
  $("#infoTitle").text("About The Game");
  $("#infoText").html(" <b><i>Sustain It </b></i> is a game that utilizes the concept of sustainability into a Tower Defense style game.<br> <p>1. Earn RP (Recycle Points) by successfully destroying enemies with your defenses.</p> <p>2. You lose Health if an enemy successfully reaches the end of the path</p><p><b>The game ends when:</b></p><ul><li>You successfully destroyed all enemies</li><li>Your health reaches 0</li></ul><p><center><b>How To Play</b></center></p><p>Click on a turret to place it in an available space on the map</p>");
});

$("#credits").click(function() {
  $("#infoTitle").text("Credits");
  $("#infoText").html("Daniel Y.: Project Lead, UI Designer, Programmer <br> Jason C.: Programmer, UI Designer <br> Sam F.: AI design, Programmer <br> Ryan R.: Sponsor <br> Nathan R.: Sponsor");

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
