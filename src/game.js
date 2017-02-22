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
 $("#infoText").html("<b> Controls:</b> <br> P - Pause <br> <br> <b>Objectives:<br></b>Kill stuff  ");
});

$("#aboutSus").click(function() {
  $("#infoTitle").text("About Sustainability");
  $("#infoText").html("Sustainability info stuff ");
});

$("#credits").click(function() {
  $("#infoTitle").text("Credits");
  $("#infoText").html("Daniel Y.: stuff <br> Jason C.: things <br> Sam F.: rest of stuff<br> Austin Z.: yes <br> Ryan R.: Sponsor ");

});

$("#btnWinLoseQuit").click(function() {
  paused = false;
  window.location.reload();

});

$("#btnWinLosePlay").click(function() {
  document.getElementById("pauseMenu").style.visibility = "hidden";
  paused = false;
  location.reload();

});
//////////////////
