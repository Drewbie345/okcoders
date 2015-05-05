var todos = require('../config/todo.js');
var Todo = require('../models/todos');

module.exports = function(app) {  
  app.get('/', function(req, res) {
    Todo.find({}, function(err, todos) {
      res.render('index', {
        todos: todos
      });
    })
  });

  app.post('/', todos.createTodo);
}