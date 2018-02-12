//______________ Framework express _________
var express = require('express');
var app = express();

//______________ Package mongoose _________
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//______________ Get data from body_________

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var multer = require('multer');
var upload = multer();
app.use(upload.array()); 
app.use(express.static('public'));

//______________ Connect to mongo _________

mongoose.connect('mongodb://localhost/account', function(err){
	if(err)
		console.log("ERR mongo :", err);
	else
		console.log("Connected to mongo !");
});

//______________ Schema _________

var User = require('./model/user');

//______________ Route and Request _________



app.post('/add',function (req,res){
	console.log(req.body);
	var newUser = new User({firstName: req.body.firstName, lastName: req.body.lastName, phoneNumber: req.body.phoneNumber});
	newUser.save(function (err) {
		if (err) {
			res.status(400).json({message : "the field is empty",
					status : "KO"});
		}
		else {
			res.status(201).json({message : "user added",
					status : "OK"});
		}
	});
});

//______________ Run server _________

app.listen(4000, function(err){
	console.log("Server started...");
});