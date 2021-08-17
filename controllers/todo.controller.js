const Todo = require('../models/Todo.model');

exports.getTodos = (async (req, res) => {
    const todos = await Todo.find()

    res.status(200).send({
        todos
    });
})

exports.getTodoById = (async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  res.status(200).send({suceess: true, data: todo});
})


exports.saveTodo = (async (req, res) => {
    const todo = req.body.todo;

    // Save the todo in database
    const result = await Todo.create(todo)

    res.status(201).send({success: true, data: result});
})

exports.updateTodo = (async (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body.todo;

    const todo = await Todo.findByIdAndUpdate(id, updatedTodo, {new: true});

    res.status(200).send({
      success: true,
      data: todo
    })
})

exports.deleteTodo = (async (req, res) => {
  const id = req.params.id;
  await Todo.findByIdAndDelete(id);
  res.status(204).send({})
})