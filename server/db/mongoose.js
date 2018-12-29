//===========================================
// Mongoose Configuration
//===========================================
// Load Mongoose
let mongoose = require('mongoose');

// Tell mongoose which promise library to use
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = { mongoose };