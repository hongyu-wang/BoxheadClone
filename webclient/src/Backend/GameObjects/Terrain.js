var TerrainConstructor = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

module.exports = {

	
	initTerrain : () =>{
	  	var terrainList = [];
	  	for (var i = 0; i < 50; i ++){
	    	var x = Math.random() * 5000 - 2500;
	    	var y = Math.random() * 5000 - 2500;
	    	var width = Math.random() * 100 + 50;
	    	var height = Math.random() * 100 + 50;
	    	terrainList.push(new TerrainConstructor(x, y, width, height));
	  	}
	  	return terrainList;
	}
	
};

