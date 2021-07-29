const express = require("express");
const todoRouter = require('./routes/todo.route');
const authRouter = require('./routes/auth.route');

const app = express();

// middleware
// helps us parse data sent through body
app.use(express.json());

app.use('/api/todo', todoRouter);
app.use('/api/auth', authRouter);

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
})


// Signup
// login