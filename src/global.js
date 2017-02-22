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
    //pause animation
    if(paused == false){
        $(this).css('background-image', 'url(../img/playbutton.png)') ;
        paused = true;
        $('.enemy').each(function(){
            $(this).stop();
        });
    }
    else{
        $(this).css('background-image', 'url(../img/pausebutton.png)') ;
        paused = false;
    }
   
});

$('.turret.turret1.level1').each(function(){
   $(this).mouseover(function(){
       switch(this.id){
            case 'turret1':
                $('.description').text(this.id + ": <cool turret info>")
                break;
            case 'turret2':
                $('.description').text(this.id + ": <another cool turret info>")
                break;
            case 'turret3':
                $('.description').text(this.id + ": <ultimate cool turret info>")
        }
        $('.description').show();
   });
    
    $(this).mouseleave(function(){
        console.log(this.id);
         $('.description').hide();
    });
});
