'use strict'

var Player = require("./GameObjects/Player.js").PlayerConstructor;
var player1 = new Player(0);
var player2 = new Player(1);
var terrainFile= require("./GameObjects/Terrain.js");
var allTerrain = terrainFile.initTerrain();
var array = require("./GameObjects/Player.js").bulletArray;


var bulletListObj = {
	bulletArray : array
};


module.exports= {
	terList: allTerrain,
	player1: player1,
	player2: player2,
	bulletList: bulletListObj,
	updateGame : (json) =>{
		if (json.id == 0){
			player1.move(json);
		} else {
			player2.move(json);
		}

		for (var i = 0; i < array.length; i ++){
			array[i].update();
		}

	}
}

	




