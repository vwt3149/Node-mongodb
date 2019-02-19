var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // telling server that we want to use prommises instead callbacks 
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}