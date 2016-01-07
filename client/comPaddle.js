comPaddle = {
				y: 200,
				dy: 10,
				draw: function(){
					ctx.beginPath();
					ctx.moveTo(895,this.y);
					ctx.lineTo(895,this.y + 100);
					ctx.lineWidth = 10;
					ctx.lineCap = 'round';
					ctx.strokeStyle = '#ffffff';
					ctx.stroke();
				},
				move: function(){
					if(ball.dx > 0){
						if(ball.y > comPaddle.y + 50){
							comPaddle.y = comPaddle.y + 30
						}
						if(ball.y < comPaddle.y + 50){
							comPaddle.y = comPaddle.y - 30
						}
						if(this.y > 400)  this.y = 400;
						if(this.y < 0)  this.y = 0;
					}else{
						if(comPaddle.y + 50 < 250){
							comPaddle.y = comPaddle.y + 10
						}
						if(comPaddle.y - 50 > 250){
							comPaddle.y = comPaddle.y - 10
						}
					}
				}
			};
