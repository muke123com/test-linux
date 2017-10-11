var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log(process);
	res.send({
		"aaa": "111"
	});
});

module.exports = router;