const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todoSchema = mongoose.model('Todo', TodoSchema);
module.exports = todoSchema;