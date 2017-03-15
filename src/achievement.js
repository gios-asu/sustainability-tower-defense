var achCounter = 0;
function achievementUnlocked(text){
  var hasClass = $('.ach').hasClass('achieved');
  if (hasClass) return;
  $('.title').html("Achievement unlocked!");
  $('.detail').html(text);
  $('.ach').addClass("achieved");
  setTimeout(function(){
    $('.ach').removeClass("achieved");
  },5000)
  achCounter++;
  document.getElementById("achCount").innerHTML = achCounter;
}

