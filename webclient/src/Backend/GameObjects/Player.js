var PLAYER_SPEED = 10;
var bulletArray = [];



var Bullet = require("./Bullet.js")
var PlayerConstructor =  function (id) {
    this.id = id;
	this.x = id * 1000;
	this.y = id * 1000;
	this.dirx = 0.00001;
	this.diry = 0.00001;
	this.hp = 10;
    this.moving = false;
    this.bulletCD = 0;
    this.move = (obj) => {
        var keys = 0;
        var x = this.x, y = this.y;
        for (var key in obj){
            if (obj[key] == "true"){
                keys ++;
            }
        }
        

        if (obj.up === "true"){
            this.diry = 1;
            if (keys == 1){
                this.dirx = 0;
            }
            y += PLAYER_SPEED;
        } else if (obj.down  === "true"){
            this.diry = -1;
            if (keys == 1){
                this.dirx = 0;
            }
            y -= PLAYER_SPEED;
        } else {
            if (this.diry != 0)
                this.diry = this.diry > 0 ? 0.00001 : -0.00001;
        }

        if (obj.left === "true") {
            this.dirx = -1;
            if (keys == 1){
                this.diry = 0;
            }
            x -= PLAYER_SPEED;
        } else if (obj.right === "true") {
            this.dirx = 1;
            if (keys == 1){
                this.diry = 0;
            }
            x += PLAYER_SPEED;
        } else {
            if (this.dirx != 0)
                this.dirx = this.dirx > 0 ? 0.00001 : -0.00001;

        }
        var game = require("../gameScript.js");
        var terrainList = game.terList;
        var collided = false;
        for (var i = 0; i < terrainList.length; i ++){
            if (terrainList[i].collide(x, y)){
                collided = true;
            }
        }

        for (var i = 0; i < bulletArray.length; i ++){
            if (bulletArray[i].collide(this.x, this.y, this.id)){
                this.hp --;
                bulletArray.splice(i, 1);
                i --;
            }
            if (Math.abs(bulletArray[i].x) > 50000 || Math.abs(bulletArray[i].y) > 50000){
                bulletArray.splice(i, 1);
                i --;
            }
        }

        if (!collided){
            this.x = x;
            this.y = y;
        }

        this.moving = this.diry > 0.1 
            || this.diry < -0.1 
            || this.dirx > 0.1 
            || this.dirx < - 0.1;

        if (obj.space === "true") {
            if (this.bulletCD <= 0){
                var bullet;
                bulletArray.push(bullet = new Bullet(this.id, this.x, this.y, this.dirx, this.diry));
                this.bulletCD = 10;
            }
        }
        this.bulletCD --;
    };
}


module.exports = {
    PlayerConstructor: PlayerConstructor,
    bulletArray: bulletArray
}