var express = require('express');
var os = require('os');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log();
	res.end();
});

router.get('/getip', function(req, res, next) {
	res.send(os.networkInterfaces());
});

module.exports = router;