var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Movie = new Schema({
	title:  		{type: String},
	year: 			{type: String },
	runtime:  		{type: Number },
	genre:   		{type: String },
	plot:   		{type: String },
	poster:   		{type: String }
});

module.exports = mongoose.model('Movie', Movie)