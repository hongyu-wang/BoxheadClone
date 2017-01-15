// Load the TCP Library
var net = require('net');
var gameScript = require('./gameScript.js');
var player1Input;
var player2Input;

// Keep track of the chat clients
var clients = [];

var terrainList = gameScript.terList;

// Start a TCP Server
net.createServer(function (socket) {

// Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort

// Put this new client in the list
    clients.push(socket);
    socket.setNoDelay(true)
    socket.id = clients.indexOf(socket);

// Init
    var init = {
        "id": socket.id,
        "terList": terrainList
    }
    socket.write(JSON.stringify(init)+"\n");

    // Handle incoming messages from clients.
    socket.on('data', function (data) {
        try {
            var parsed = JSON.parse(data);
            parsed['id'] = socket.id;
            if (socket.id == 0){
                if (player1Input == undefined){
                    player1input = parsed;
                    gameScript.updateGame(parsed);

                } else {
                    
                    for (var key in player1Input){
                        if (parsed[key] != player1Input[key]){
                            player1Input[key] = parsed[key];
                        }
                    }
                }

            } else if (socket.id == 1) {
                if (player2Input == undefined) {
                    player2input = parsed;
                    gameScript.updateGame(parsed);
                } else {
                    for (var key in player1Input){
                        if (parsed[key] != player2Input[key]){
                            player2Input[key] = parsed[key];
                        }
                    }
                }
            } 

            
            
        } catch (ignored){

        }
    });

    // Remove the client from the list when it leaves
    socket.on('end', function () {
        clients.splice(socket.id, 1);
    });

    var t = setInterval(broadcast,100);
    if (player1Input != undefined)
        var u = setInterval(gameScript.updateGame(player1Input), 100);
    
    if (player2Input != undefined)
        var v = setInterval(gameScript.updateGame(player2Input), 100);
    // Send a message to all clients
    function broadcast() {
        clients.forEach(function (client) {
            var player1 = JSON.stringify(gameScript.player1);
            var player2 = JSON.stringify(gameScript.player2);
            var bulletList = JSON.stringify(gameScript.bulletList);
            client.write(player1 + "\n" + player2 + "\n" + bulletList + "\n");
        });
    }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("Server running port 5000\n");

//module.exports.create = create;
