var map = [10000, 10000];
var mapRange = 10000;
var angle = 0;
var clientState = {
	players : {
		"player1ID": "blank",
		"player2ID": "blank"
	},
	bulletsOnScreen : [],
	barriers : []
}

var bullet = {
	position : [,],
	angle : 0
}

function Player(ID)
{
    id  = ID
	position = [0, 0],
	angle = 0	 
}

function initGame(gameStateDict){
	var PLAYER1 = new Player(gameStateDict[id])
	var PLAYER2 = new Player(gameStateDict[id2])

	delete clientState.players["player1ID"];
	clientState.players.push({
		key: id,
		value: PLAYER1
	})
	delete clientState.players["player1ID"];
	clientState.players.push({
		key: id,
		value: PLAYER2
	})

	PLAYER1.position = [1000, 1000]
	PLAYER2.position = [9000, 9000]
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

		if (gameStateDict[up] === "true"){
			// increase player pos by 1
			player1Pos[1]++;
			angle = 90;
		}
		else if (gameStateDict[down] === "true"){
			// increase player pos by 1
			angle = 270;
		}
		else if (gameStateDict[left] === "true"){
			// increase player pos by 1
            angle = 180

		}
		else if (gameStateDict[right] === "true"){
			// increase player pos by 1
			angle = 0
		}
		if (keyPressed === 2){
			if (gameStateDict[right] === "true" && gameStateDict[up] === "true"){
			  angle = 45;
			}
			else if (gameStateDict[right] === "true" && gameStateDict[down] === "true"){
			  angle = 315;
			}
			else if (gameStateDict[up] === "true" && gameStateDict[left] === "true"){
			  angle = 135;
			}
			else if (gameStateDict[left] === "true" && gameStateDict[down] === "true"){
			  angle = 225;
			}
			else if (gameStateDict[right] === "true" && gameStateDict[up] === "true"){
			  angle = 45;
			}
	   }
	}
	if (gameStateDict[space] === "true"){
			bullet.position = [0 , 0]
			bullet.angle = angle
		}
}


