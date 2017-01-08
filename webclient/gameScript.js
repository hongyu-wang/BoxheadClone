
var map = [10000, 10000];
var mapRange = 10000;
var angle = 0;
var bulletSize = 40
var playerSize = 150
var direction = [];
var clientState = {
	players : {
		"player1ID": "blank",
		"player2ID": "blank"
	},
	bulletsOnScreen : [],
}


function bulletObj(){
	var position;
	var angle;
}

function Player(ID)
{
    var id = ID
	var position = [0, 0]
	var direction = []
	var heatlh = 10	 
}

function initGame(gameStateDict){
	var PLAYER1 = new Player(gameStateDict["id"])
	var PLAYER2 = new Player(gameStateDict["id2"])

	delete clientState.players["player1ID"];
	clientState.players.push({
		key: gameStateDict["id"],
		value: PLAYER1
	})
	delete clientState.players["player2ID"];
	clientState.players.push({
		key: gameStateDict["id2"],
		value: PLAYER2
	})

	PLAYER1.position = [1000, 1000]
	PLAYER1.direction = [0, 1]
	PLAYER1.id = gameStateDict[id]
	PLAYER1.heatlh = 10
	PLAYER2.heatlh = 10
	PLAYER2.position = [9000, 9000]
	PLAYER2.id = gameStateDict[id2]
	PLAYER2.direction = [0, -1]
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
			direction = [0, 1]
		}
		else if (gameStateDict["down"] === "true"){
			angle = 270;
			direction = [0, -1]
		}
		else if (gameStateDict["left"] === "true"){
            angle = 180
            direction = [-1, 0]
		}
		else if (gameStateDict["right"] === "true"){
			angle = 0
			direction = [1, 0]
		}
		if (keyPressed === 2){
			if (gameStateDict["right"] === "true" && gameStateDict["up"] === "true"){
			  angle = 45;
			  direction = [1, 1];
			}
			else if (gameStateDict["right"] === "true" && gameStateDict["down"] === "true"){
			  angle = 315;
			  direction = [1, -1];
			}
			else if (gameStateDict["up"] === "true" && gameStateDict["left"] === "true"){
			  angle = 135;
			  direction = [-1, 1];
			}
			else if (gameStateDict["left"] === "true" && gameStateDict["down"] === "true"){
			  angle = 225;
			  direction = [-1, -1];
			}
			else if (gameStateDict["right"] === "true" && gameStateDict["up"] === "true"){
			  angle = 45;
			  direction = [1, 1];
			}
			clientState.players[gameStateDict["id"]].direction = direction;
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
	return extractInfo()
}

function collision(gameStateDict)
{
	var playerIDS = Object.keys(clientState.players)
	var player1POS = clientState.players[playerIDS[0]].position
	var player2POS = clientState.players[playerIDS[1]].position

	for (var i = 0; i < clientState.bulletsOnScreen.length; i++)
	{
		if (clientState.bulletsOnScreen[i].position[0])
		{

		}
	}
}

function extractInfo(){
	var playerIDS = Object.keys(clientState.players)
	var jsomInfo = {
		Player1Pos : clientState.players[playerIDS[0]].position,
		PLayer2Pos : clientState.players[playerIDS[1]].position,
		Player1Direction : clientState.players[playerIDS[0]].direction,
		Player2Direction : clientState.players[playerIDS[1]].direction,
		Player1Health : clientState.players[playerIDS[0]].heatlh,
		Player2Health : clientState.players[playerIDS[1]].heatlh,
	}

	for (var i = 0; i < clientState.bulletsOnScreen.length; i++)
	{
		jsomInfo.push({
			key : "bullet" + i,
			value : clientState.bulletsOnScreen[i].position
		})
	}

	return jsomInfo
}

function move(id)
{
	var playerPOS = clientState.players[id].position
	if (clientState.players[id].direction === [0, 1])
	{
		playerPOS[1] += playerSize;
	}
	else if (clientState.players[id].direction === [-1, 0])
	{
		playerPOS[0] -= playerSize;
	}
	else if (clientState.players[id].direction === [0, -1])
	{
		playerPOS[1] -= playerSize;
	}
	else if (clientState.players[id].direction === [1, 0])
	{
		playerPOS[0] += playerSize;
	}
	else if (clientState.players[id].direction === [1, 1])
	{
		playerPOS[0] += playerSize;
		playerPOS[1] += playerSize;
	}
	else if (clientState.players[id].direction === [-1, 1])
	{
		playerPOS[0] -= playerSize;
		playerPOS[1] += playerSize
	}
	else if (clientState.players[id].direction === [-1, -1])
	{
		playerPOS[0] -= playerSize;
		playerPOS[1] -= playerSize;
	}
	else if (clientState.players[id].direction === [1, -1])
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
	else if (bullet.angle === 315)
	{
		bulletPOS[0] += bulletSize;
		bulletPOS[1] -= bulletSize;
	}

	return bulletPOS;
}

module.exports.clientState = clientState;
module.exports.updateGame = updateGame;

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