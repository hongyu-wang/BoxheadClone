var TerrainConstructor = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.collide = (x, y) => {
    	
    	var xCond = this.x - 50 < x && this.x + width + 50 > x;
    	var yCond = this.y - 40 < y && this.y + height + 40 > y;
    	return xCond && yCond;
    }
}

module.exports = {

	
	initTerrain : () =>{
	  	var terrainList = [];
	  	for (var i = 0; i < 50; i ++){
	    	var x = Math.random() * 5000 - 2500;
	    	var y = Math.random() * 5000 - 2500;
	    	var width = Math.random() * 100 + 50;
	    	var height = Math.random() * 100 + 50;
	    	var cond1 = Math.abs(x) > 150 && Math.abs(y) > 150;
	    	var cond2 = Math.abs(x - 1000) > 150 && Math.abs(y - 1000) > 150;
	    	if (cond1 && cond2){
	    		terrainList.push(new TerrainConstructor(x, y, width, height));
	    	} 

	  	}
	  	return terrainList;
	}
	
};

