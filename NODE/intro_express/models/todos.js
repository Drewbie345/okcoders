var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  timestamp: Date,
  description: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);