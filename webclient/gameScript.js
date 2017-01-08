var map = [[]];
var mapRange = 100;
var angle = 0;
var clientState = {
	player1 : Player,
	player2 : Player,
	bulletsOnScreen : [],
	barriers : []
}

var bullet = {
	position : [,],
	angle : 0
}

var Player = {
	id : "0x",
	position : [0, 0],
	angle : 0
}

function updateGame(gameStateDict){
	var keysPressed = 0;
	var keys = Object.keys(gameStateDict)
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


