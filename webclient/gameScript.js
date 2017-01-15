
var map = [10000, 10000];
var mapRange = 10000;
var angle = 0;
var bulletSize = 10
var playerSize = 150
var direction = [];
var PLAYER1 = new Player("0")
var PLAYER2 = new Player("1")
var numTerrains = 7;
PLAYER1.position = [1000, 1000]
PLAYER1.direction = [0, 1]
PLAYER1.id = "0"
PLAYER1.health = 10
PLAYER2.health = 10
PLAYER2.position = [9000, 9000]
PLAYER2.id = "1"
PLAYER2.direction = [0, -1]
var clientState = {
	players : {
		"0": PLAYER1,
		"1": PLAYER2,
	},
	bulletsOnScreen : [],
}

var player1 = {}
var player2 = {}
var bulletArray = {}
var terrain = {};

populateTerrain()
function bulletObj(){
	var position;
	var angle;

}

function Player(ID)
{
    var id = ID
	var position = [0, 0]
	var direction = []
	var health = 10
}

function updateGame(gameStateDict){
	var keysPressed = 0;
	var keys = Object.keys(gameStateDict)
	var playerIDs = Object.keys(clientState.players)
	var direction = [0, 0]
	for (var i = 0; i < 4; i++){
		if (gameStateDict[keys[i]] == "true"){
		  keysPressed++;

		}
	}

	if (keysPressed <= 2){

		if (gameStateDict["up"] == "true"){
			angle = 90;
			direction = [0, 1]
		}
		else if (gameStateDict["down"] == "true"){
			angle = 270;
			direction = [0, -1]
		}
		else if (gameStateDict["left"] == "true"){
            angle = 180
            direction = [-1, 0]
		}
		else if (gameStateDict["right"] == "true"){
			angle = 0
			direction = [1, 0]
		} else {
			direction = [0, 0]
		}

		if (keysPressed == 2){
			if (gameStateDict["right"] == "true" && gameStateDict["up"] == "true"){
			  angle = 45;
			  direction = [1, 1];
			}
			else if (gameStateDict["right"] == "true" && gameStateDict["down"] == "true"){
			  angle = 315;
			  direction = [1, -1];
			}
			else if (gameStateDict["up"] == "true" && gameStateDict["left"] == "true"){
			  angle = 135;
			  direction = [-1, 1];
			}
			else if (gameStateDict["left"] == "true" && gameStateDict["down"] == "true"){
			  angle = 225;
			  direction = [-1, -1];
			}
			else if (gameStateDict["right"] == "true" && gameStateDict["up"] == "true"){
			  angle = 45;
			  direction = [1, 1];
			}
			else{
				direction = [0, 0];
			}
	  }
		clientState.players[gameStateDict["id"]].direction = direction
	}
	if (gameStateDict["space"] === "true"){
			var newBullet = new bulletObj()
			newBullet.position = []
			newBullet.position.push(clientState.players[gameStateDict["id"]].position[0])
			newBullet.position.push(clientState.players[gameStateDict["id"]].position[1])
			newBullet.position[0] += 50
			newBullet.angle = angle
			clientState.bulletsOnScreen.push(newBullet)
		}

	moveBullet()
	var hitormiss = collision()

	if (!hitormiss){
		move(gameStateDict["id"])
	}
	player1.x = clientState.players["0"].position[0];
	player1.y = clientState.players["0"].position[1],
	player1.dirx = clientState.players["0"].direction[0],
	player1.diry = clientState.players["0"].direction[1],
	player1.id = 0,

	player1.hp =  clientState.players["0"].health



	player2.x = clientState.players["1"].position[0]
	player2.y = clientState.players["1"].position[1]
	player2.dirx= clientState.players["1"].direction[0]
	player2.diry = clientState.players["1"].direction[1]
	player2.id = 1
	player2.hp =  clientState.players["1"].health

	var allBullets = []
	for (var i = 0; i < clientState.bulletsOnScreen.length; i++)
	{
		allBullets.push({
			x : clientState.bulletsOnScreen[i].position[0],
			y : clientState.bulletsOnScreen[i].position[1],
			id : i
		})
	}
	bulletArray.bulletArray = allBullets;




	return extractInfo()
}
function populateTerrain()
{
	
	var terrainList = []
	terrainList.push({
		"x": 2000,
		"y": 0,
		"width": 5,
		"height": 6000
	})
	terrainList.push({
		x: 1000,
		y: 2000,
		width: 500,
		height: 5
	})
	terrainList.push({
		x: 1500,
		y: 4000,
		width: 200,
		height: 5
	})
	terrainList.push({
		x: 4000,
		y: 350,
		width: 340,
		height: 300
	})
	terrainList.push({
		x: 3000,
		y: 7000,
		width: 900,
		height: 50
	})
	terrainList.push({
		x: 100,
		y: 9000,
		width: 700,
		height: 25
	})
	terrainList.push({
		x: 9000,
		y: 100,
		width: 700,
		height: 25
	})
	terrain = {
		terList : terrainList
	}
}

function intersects(rect, rect2) {
    return !( rect.position[0]         > (rect2.position[0] + 20) ||
             (rect.position[0] + 100 <  rect2.position[0]          ||
              rect.position[1]           > (rect2.position[1] + 20) ||
             (rect.position[1] + 100) <  rect2.position[1]));

            }
function intersectsTerrain(rect, rect2) {
    return !( rect.position[0]         > (rect2.x + 20) ||
             (rect.position[0] + 100 <  rect2.x          ||
              rect.position[1]           > (rect2.y + 20) ||
             (rect.position[1] + 100) <  rect2.y));

            }

function collision(gameStateDict)
{
	var player1POS = clientState.players["0"].position
	var player2POS = clientState.players["1"].position
	var hit = false;

	for (var i = 0; i < clientState.bulletsOnScreen.length; i++)
	{
		if (intersects(clientState.players[0], clientState.bulletsOnScreen[i]))
		{
			clientState.players[0].health--;
			console.log("Player 1 has been hit. Current HP: " + clientState.players[0].health)
			hit = true;

		}
		else if (intersects(clientState.players[1], clientState.bulletsOnScreen[i]))
		{
			clientState.players[1].health--;
			console.log("Player 2 has been hit. Current HP: " + clientState.players[1].health)
			hit = true
		}

	}

	for (var i = 0; i < numTerrains; i++)
	{
		if (intersectsTerrain(clientState.players[0], terrain.terList[i]))
		{
			hit = true;

		}
		else if (intersectsTerrain(clientState.players[1], terrain.terList[i]))
		{
			hit = true
		}
	}
	return hit;
}

function extractInfo(){
	var jsomInfo = {
		Player1Pos : clientState.players["0"].position,
		PLayer2Pos : clientState.players["1"].position,
		Player1Direction : clientState.players["0"].direction,
		Player2Direction : clientState.players["1"].direction,
		Player1Health : clientState.players["0"].health,
		Player2Health : clientState.players["1"].health,
	}

	for (var i = 0; i < clientState.bulletsOnScreen.length; i++)
	{
		var key = "bullet" + i;
		jsomInfo.key = clientState.bulletsOnScreen[i].position;
	}

	return jsomInfo
}

function move(id)
{
	var playerPOS = clientState.players[id].position
	if (clientState.players[id].direction[1] == 1)
	{
		playerPOS[1] += 10;
	}
	if (clientState.players[id].direction[0] == -1)
	{
		playerPOS[0] -= 10;
	}
	if (clientState.players[id].direction[1] == -1)
	{
		playerPOS[1] -= 10;
	}
	if (clientState.players[id].direction[0] == 1)
	{
		playerPOS[0] += 10;
	}

	clientState.players[id].position = playerPOS;

}

function moveBullet(){
	for (var i = 0; i < clientState.bulletsOnScreen.length; i++)
	{
		clientState.bulletsOnScreen[i].position = getBulletTravel(clientState.bulletsOnScreen[i]);
	}
}

function getBulletTravel(bullet)
{
	var bulletPOS = bullet.position
	if (bullet.angle === 90)
	{
		bulletPOS[1] += bulletSize;
	}
	else if (bullet.angle === 180)
	{
		bulletPOS[0] -= bulletSize;
	}
	else if (bullet.angle === 270)
	{
		bulletPOS[1] -= bulletSize;
	}
	else if (bullet.angle === 0)
	{
		bulletPOS[0] += bulletSize;
	}
	else if (bullet.angle === 45)
	{
		bulletPOS[0] += bulletSize;
		bulletPOS[1] += bulletSize;
	}
	else if (bullet.angle === 135)
	{
		bulletPOS[0] -= bulletSize;
		bulletPOS[1] += bulletSize
	}
	else if (bullet.angle === 225)
	{
		bulletPOS[0] -= bulletSize;
		bulletPOS[1] -= bulletSize;
	}
	else if (bullet.angle === 315)
	{
		bulletPOS[0] += bulletSize;
		bulletPOS[1] -= bulletSize;
	}

	return bulletPOS;
}

module.exports.clientState = clientState;
module.exports.updateGame = updateGame;
module.exports.terrain = terrain;
module.exports.player1 = player1;
module.exports.player2 = player2;
module.exports.bulletArray = bulletArray

