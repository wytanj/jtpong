// Template.game.onCreated(function () {
// })

Template.game.events({
	'click': function() {
		console.log('CLICKED')
		if(this.keyCode == 40){
					if(wait){
			        	wait = false;
			        }
					this.preventDefault();
					userPaddle.move(1);
		}else if(this.keyCode == 38){
			        if(wait){
			        	wait = false;
			        }
					userPaddle.move(0);
					this.preventDefault();
		}
	},
	'click #help': function() {
		window.alert('You need help? Don\'t be a noob')
	},




})

Template.game.helpers({
	newScore: function(){
		console.log('New Score called')
		if (typeof Session.get('playerScore') === 'undefined'){
    console.log('playerScore is undefined')
		Session.set('playerScore', 0);
		Session.set('comScore', 0);
		}
		return Session.get('playerScore') + ' : ' + Session.get('comScore');
	},

	startDraw: function(){
		canvas = document.getElementById('canvas');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
	}

	var fps = 60;
	function draw() {
	    setTimeout(function() {
	        requestAnimationFrame(draw);
	        if(!wait){
				court.draw();
			}
	    }, 1000 / fps);
	}

	/** first draw **/
	ctx.clearRect(0,0,900,500);
	userPaddle.draw();
	comPaddle.draw();
	staticBars.draw();
	ball.draw();
	wait = true;
	draw();
	/****************/
	}
});
