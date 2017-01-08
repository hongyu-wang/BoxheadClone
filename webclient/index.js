// Load the TCP Library
net = require('net');

// Keep track of the chat clients
var clients = [];

// Start a TCP Server
net.createServer(function (socket) {

  // Identify this client
  socket.name = socket.remoteAddress + ":" + socket.remotePort 

  // Put this new client in the list
  clients.push(socket);
  socket.id = clients.indexOf(socket);

  // Send a nice welcome message and announce
  socket.write("Welcome " + socket.name + "\n");
  broadcast(socket.name + " joined the game\n", socket);

  // Handle incoming messages from clients.
  socket.on('data', function (data) {
  	var parsed = JSON.parse(data);
  	updateGame(parsed);
  	//broadcast(updated, socket);
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
    clients.splice(socket.id, 1);
    //broadcast(socket.name + " left the game.\n");
  });
  
  var t = setInterval(broadcast,16.6);
  // Send a message to all clients
  function broadcast() {
    clients.forEach(function (client) {
      client.write(message);
    });
    // Log it to the server output too
    process.stdout.write(message)
  }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("Chat server running at port 5000\n");