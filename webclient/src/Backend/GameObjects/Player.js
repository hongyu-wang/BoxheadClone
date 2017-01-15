
var PlayerConstructor =  function (id) {
	this.x = id * 1000;
	this.y = id * 1000;
	this.dirx = 0;
	this.diry = 0;
	this.hp = 10;
    this.move = (obj) => {
        if (obj.up === "true"){
            this.diry = 1;
            this.y += 10;
        }  else if (obj.down  === "true"){
            this.diry = -1;
            this.y -= 10;
        } else {
            this.diry = 0;
        }

        if (obj.left === "true") {
            this.dirx = -1;
            this.x -= 10;
        } else if (obj.right === "true") {
            this.dirx = 1;
            this.x += 10;
        } else {
            this.dirx = 0;
        }
    };
}


module.exports = PlayerConstructor;