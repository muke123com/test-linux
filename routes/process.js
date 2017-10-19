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
	        res.render("index", {
	        	msg: "When nothing seems to help,I go and look at a stonecutter hammering away at\
					his rock perhaps a hundred times without as much as a crack showing in\
					it.Yet at the hundred and first blowit will split in two,and I know it was\
					not that blow that did it —— but all that had gone before.  ——Jacob Riis"
	        })
	    } else {
	    	stdout.split("\n").join("<br />").split("\t").join("&nbsp;&nbsp;");
	    	console.log(stdout);
	        res.render("index", {
	        	msg: stdout
	        })
	    }
	});
});

router.post('/shell', function(req, res, next) {
	var shell = req.body.shell;
	exec(shell, function(err,stdout,stderr){
	    if(err) {
	        stderr = stderr.toString();
	        console.log('error:'+stderr);
	        res.send({
	        	status: 0,
	        	error: stderr
	        })
	    } else {
	        res.send({
	        	status: 1,
	        	msg: stdout
	        })
	    }
	});
});

router.get('/getip', function(req, res, next) {
	res.send(os.networkInterfaces());
});

module.exports = router;