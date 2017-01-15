'use strict'

var TerrainFile = require("./GameObjects/Terrain.js");

module.exports= {
	updateGame : (json) =>{
		var terrain = new TerrainFile.Terrain(0, 0, 5, 5);
		console.log(JSON.stringify(terrain));
	}
}

module.exports.updateGame("");

