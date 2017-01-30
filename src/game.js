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


$("#backHome").click(function() {
  document.getElementById("bgimg").style.display = "block";
  document.getElementById("infoPage").style.display = "none";
});

$("#dropB").click(function() {//ignore this function..
 document.getElementById("myDropdown").classList.toggle("show");
});
