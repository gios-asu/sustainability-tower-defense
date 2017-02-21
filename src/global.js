//put all global variables here
var paused = true;
//current rp
var money = parseInt($('.money').text()); 
//cost of turret, modified in place(type, id)
var cost;
//boolean variable to check the player has enough money to purchase turret
var hasMoney;
//health of the player
var health = 100;

function reduceHP() {
    health -= 10;
    document.getElementById("health").innerHTML = health;
}

$('.start').click(function(e){
   $(this).css('background-image', 'url(../img/pausebutton.png)') 
   alert("hel");
});

