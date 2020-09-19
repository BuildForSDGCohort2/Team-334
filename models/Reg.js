const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RegSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	}
	,
	email: {
		type: String,
		required: true,
		unique: true
	}
	,
	password: {
		type: String,
		required: true
	},
	parent: {
		type: String
	}
	,
	code: {
		type: String,
		required: true
	},
	register_date: {
		type: Date,
		default: Date.now
	}
})

module.exports = Reg = mongoose.model('reg', RegSchema);