var module.exports = {};
module.exports.clientState = clientState;
module.exports.updateGame = updateGame;

var map = [10000, 10000];
var mapRange = 10000;
var angle = 0;
var bulletSize = 40
var playerSize = 75
var clientState = {
	players : {
		"player1ID": "blank",
		"player2ID": "blank"
	},
	bulletsOnScreen : [],
	barriers : []
}

var bulletQ = {
	position : [,],
	angle : 0
}

function bulletObj(){
	var position;
	var angle;
}

function Player(ID)
{
    var id = ID
	var position = [0, 0]
	var angle = 0
	var heatlh = 10	 
}

function initGame(gameStateDict){
	var PLAYER1 = new Player(gameStateDict[id])
	var PLAYER2 = new Player(gameStateDict[id2])

	delete clientState.players["player1ID"];
	clientState.players.push({
		key: id,
		value: PLAYER1
	})
	delete clientState.players["player2ID"];
	clientState.players.push({
		key: id,
		value: PLAYER2
	})

	PLAYER1.position = [1000, 1000]
	PLAYER1.angle = 90
	PLAYER1.id = gameStateDict[id]
	PLAYER1.heatlh = 10
	PLAYER2.heatlh = 10
	PLAYER2.position = [9000, 9000]
	PLAYER2.id = gameStateDict[id2]
	PLAYER2.angle = 270
}

function updateGame(gameStateDict){
	var keysPressed = 0;
	var keys = Object.keys(gameStateDict)
	var playerIDs = Object.keys(clientState.players)
	if (playerIDs[0] = "player1ID"){
		initGame(gameStateDict)
	}

	for (var i = 0; i < 4; i++){
		if (gameStateDict[keys[i]] === "true"){
		  keysPressed++;
		}
	}
	if (keyPressed <= 2){

		if (gameStateDict["up"] === "true"){
			angle = 90;
		}
		else if (gameStateDict["down"] === "true"){
			angle = 270;
		}
		else if (gameStateDict["left"] === "true"){
            angle = 180

		}
		else if (gameStateDict["right"] === "true"){
			angle = 0
		}
		if (keyPressed === 2){
			if (gameStateDict["right"] === "true" && gameStateDict["up"] === "true"){
			  angle = 45;
			}
			else if (gameStateDict["right"] === "true" && gameStateDict["down"] === "true"){
			  angle = 315;
			}
			else if (gameStateDict["up"] === "true" && gameStateDict["left"] === "true"){
			  angle = 135;
			}
			else if (gameStateDict["left"] === "true" && gameStateDict["down"] === "true"){
			  angle = 225;
			}
			else if (gameStateDict["right"] === "true" && gameStateDict["up"] === "true"){
			  angle = 45;
			}
	   }
	}
	if (gameStateDict[space] === "true"){
			var newBullet = new bulletObj()
			newBullet.position = clientState.players[gameStateDict["id"]].position
			newBullet.angle = angle
			clientState.bulletsOnScreen.push(newBullet)
		}

	moveBullet()

	// collisions
	move(gameStateDict["id"])
	return clientState
}

function collision(gameStateDict)
{

}


function move(id)
{
	var playerPOS = clientState.players[id].position
	if (clientState.players[id].angle === 90)
	{
		playerPOS[1] += playerSize;
	}
	else if (clientState.players[id].angle === 180)
	{
		playerPOS[0] -= playerSize;
	}
	else if (clientState.players[id].angle === 270)
	{
		playerPOS[1] -= playerSize;
	}
	else if (clientState.players[id].angle === 0)
	{
		playerPOS[0] += playerSize;
	}
	else if (clientState.players[id].angle === 45)
	{
		playerPOS[0] += playerSize;
		playerPOS[1] += playerSize;
	}
	else if (clientState.players[id].angle === 135)
	{
		playerPOS[0] -= playerSize;
		playerPOS[1] += playerSize
	}
	else if (clientState.players[id].angle === 225)
	{
		playerPOS[0] -= playerSize;
		playerPOS[1] -= playerSize;
	}
	else if (clientState.players[id].angle === 180)
	{
		playerPOS[0] += playerSize;
		playerPOS[1] -= playerSize;
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
	else if (bullet.angle === 180)
	{
		bulletPOS[0] += bulletSize;
		bulletPOS[1] -= bulletSize;
	}

	return bulletPOS;
}


/*var PLAYER1 = new Player("gameStateDict[id]")
PLAYER1.position = [1000, 9000]
PLAYER1.angle = 90
var PLAYER2 = new Player("gameStateDict[id2]")
var bullet1 = new bulletObj()
bullet1.position = [4,3]
bullet1.angle = 45
console.log(PLAYER1.position)
clientState = {
	players : {
		"gameStateDict[id]": PLAYER1,
		"gameStateDict[id]": PLAYER2
	},
	bulletsOnScreen : [bullet1],
	barriers : []
}
move("gameStateDict[id]")

console.log(PLAYER1.position)*/