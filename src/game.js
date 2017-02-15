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
 $("#infoText").text(" Controls: \n P - Pause \n\n <b>Objectives: \n Kill stuff ");
});

$("#aboutSus").click(function() {
  $("#infoTitle").text("About Sustainability");
  $("#infoText").text("Sustainability info stuff ");
});

$("#credits").click(function() {
  $("#infoTitle").text("Credits");
  $("#infoText").text("Daniel: stuff \n Jason: things \n Sam: rest of stuff\n ");

});
//////////////////
