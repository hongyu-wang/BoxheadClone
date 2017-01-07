const express = require('express'),
	  app = express(),
	  PORT = process.env.PORT || 3000;
	  router = express.Router();

app.listen(PORT, () => console.log('Listening on port %d', PORT));

router.post('/', function (req, res) {
	var body = [];
	req.on('data', function(chunk) {
		body.push(chunk);
	}).on('end', function() {
		body = Buffer.concat(body).toString();});
	console.log(body);
});
