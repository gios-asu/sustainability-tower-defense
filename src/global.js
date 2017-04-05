//put all global variables here
//current rp
var money = parseInt($('.money').text()); 
//cost of turret, modified in place(type, id)
var cost;
//boolean variable to check the player has enough money to purchase turret
var hasMoney;
//health of the player
var health = 100;
var paused = true;
var t;
var initialStart = false;
var winLose = false;//used to stop pausing from happening
var youWin = false;

//next/previous modal functionality for intro
 function showModal(id) {
      $(".modal").modal('hide');
      $("#" + id).modal();
    }

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
            $(this).pause();
        });
        t.stop();
        
    }
    else{
        if(initialStart ==  false){
             t = new Timer(level1, level1Times[num]*1000);
            initialStart = true;
        }
        else{
            t.start();
        }
        $(this).css('background-image', 'url(../img/pausebutton.png)') ;
        paused = false;
        
        $('.enemy').each(function(){
            $(this).resume();
        });
        
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


(function() {
	var $ = jQuery,
		pauseId = 'jQuery.pause',
		uuid = 1,
		oldAnimate = $.fn.animate,
		anims = {};

	function now() { return new Date().getTime(); }

	$.fn.animate = function(prop, speed, easing, callback) {
		var optall = $.speed(speed, easing, callback);
		optall.complete = optall.old; // unwrap callback
		return this.each(function() {
			// check pauseId
			if (! this[pauseId])
				this[pauseId] = uuid++;
			// start animation
			var opt = $.extend({}, optall);
			oldAnimate.apply($(this), [prop, $.extend({}, opt)]);
			// store data
			anims[this[pauseId]] = {
				run: true,
				prop: prop,
				opt: opt,
				start: now(),
				done: 0
			};
		});
	};

	$.fn.pause = function() {
		return this.each(function() {
			// check pauseId
			if (! this[pauseId])
				this[pauseId] = uuid++;
			// fetch data
			var data = anims[this[pauseId]];
			if (data && data.run) {
				data.done += now() - data.start;
				if (data.done > data.opt.duration) {
					// remove stale entry
					delete anims[this[pauseId]];
				} else {
					// pause animation
					$(this).stop();
					data.run = false;
				}
			}
		});
	};

	$.fn.resume = function() {
		return this.each(function() {
			// check pauseId
			if (! this[pauseId])
				this[pauseId] = uuid++;
			// fetch data
			var data = anims[this[pauseId]];
			if (data && ! data.run) {
				// resume animation
				data.opt.duration -= data.done;
				data.done = 0;
				data.run = true;
				data.start = now();
				oldAnimate.apply($(this), [data.prop, $.extend({}, data.opt)]);
			}
		});
	};
})();
