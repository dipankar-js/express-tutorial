const express = require('express');
const {getTodos, saveTodo, updateTodo} = require('../controllers/todo.controller');

const router = express.Router();

// GET
router.get('/', getTodos);

// POST
router.post('/', saveTodo);

// PUT
router.put('/:id', updateTodo)

// DELETE

module.exports = router;
