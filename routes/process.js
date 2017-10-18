var express = require('express');
var os = require('os');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec; 
var cmdStr = 'fortune';

var router = express.Router();

router.get('/', function(req, res, next) {
	exec(cmdStr, function(err,stdout,stderr){
	    if(err) {
	        console.log('error:'+stderr);
	        res.end();
	    } else {
	        console.log(stdout);
	        res.send({
	        	msg: stdout
	        });
	    }
	});
});

router.get('/getip', function(req, res, next) {
	res.send(os.networkInterfaces());
});

module.exports = router;