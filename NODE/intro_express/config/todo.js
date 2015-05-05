var Todo = require('../models/todos');

module.exports.createTodo = function(req, res, next) {
  console.log(req.body);
  var newTodo = new Todo();
  newTodo.timestamp = new Date();
  newTodo.description = req.body.description;
  newTodo.completed = false;

  newTodo.save(function(err) {
    if (err) {
      console.log('There was an error creating a todo ' + err);
    }
    res.redirect('/');
  });
}