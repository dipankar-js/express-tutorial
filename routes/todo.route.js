const express = require('express');
const {getTodos, saveTodo, updateTodo, getTodoById, deleteTodo} = require('../controllers/todo.controller');

const router = express.Router();

// GET
router.get('/', getTodos);

router.get('/:id', getTodoById);

// POST
router.post('/', saveTodo);

// PUT
router.put('/:id', updateTodo)

// DELETE
router.delete('/:id', deleteTodo);

module.exports = router;
