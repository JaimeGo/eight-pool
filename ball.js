const BALL_ORIGIN=new Vector2(25,25)

function Ball(position){
	this.position=position
	this.velocity=new Vector2()
}

Ball.prototype.update=function(delta){
	this.velocity=this.velocity.mult(delta)
	this.position=this.position.addTo(this.velocity)
	
	

}
Ball.prototype.draw=function(){
	Canvas.drawImage(sprites.whiteball,this.position,BALL_ORIGIN)
}
Ball.prototype.shoot=function(power,rotation){
	console.log("SHOOT!")
	this.velocity=new Vector2(power*Math.cos(rotation),power*Math.sin(rotation))
	console.log(rotation,Math.cos(rotation),Math.sin(rotation), this.velocity)
}