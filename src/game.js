var $ = require("jquery");
var game_state = require("./game_state.js");

//$.getScript("./AI.js");
$("#buttonStart").click(function() {
  game_state.clickFunc();
});

$("#buttonInfo").click(function() {//change background to info background
  //document.getElementById("bgimg").style.backgroundImage = "url('../img/bgInfo.jpg')";
  //$(".button").hide();
  document.getElementById("bgimg").style.display = "none";
  document.getElementById("infoPage").style.display = "block";
});


$("#buttonExtra").click(function() {//change background to other background
  
});

$("#back").click(function() {//go back to main menu
  document.getElementById("bgimg").style.display = "block";
  document.getElementById("infoPage").style.display = "none";
});

/*$("#myDropdown").click(function() {
  document.getElementById("myDropdown").classList.toggle("show");
});*/
/*var background = new Raster("img/bg1.jpg", [400, 300]);
background.position = view.center;*/
