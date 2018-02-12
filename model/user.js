var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// define the userSchema
var userSchema = new Schema({
	firstName :{
		type: String,
		required : true
	},
	lastName:{
		type: String,
		required : true
	},
	phoneNumber :{
		type: Number,
		required : true
	}
});



// Export the User model
module.exports = mongoose.model('User',userSchema);
