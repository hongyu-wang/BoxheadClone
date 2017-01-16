"use strict"
var BULLET_SPEED = 30;


var BulletConstructor = function(id, x, y, dirx, diry){
	
	this.id = id;
	this.x = x;
	this.y = y;
	this.dirx = dirx != 0 ? dirx/Math.abs(dirx) : 0;
	this.diry = diry != 0 ? diry/Math.abs(diry) : 0;
	this.update = () =>{
		this.x += this.dirx * BULLET_SPEED;
		this.y += this.diry * BULLET_SPEED;
	}
	this.collide = (x, y, id) => {
		var cond0 = this.id != id;
		var cond1 = Math.abs(this.x - x) < 60;
		var cond2 = Math.abs(this.y - y) < 60;
		return cond1 && cond2 && cond0;
	}
};

module.exports = BulletConstructor;