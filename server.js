const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo.route');
const authRouter = require('./routes/auth.route');

// Load env vars
dotenv.config();

const app = express();

// middleware
// helps us parse data sent through body
app.use(express.json());

mongoose.connect(
    process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },
    () => {
        console.log('Connected to MongoDB');
    }
    );


app.use('/api/todo', todoRouter);
app.use('/api/auth', authRouter);

const PORT = 4000;

app.listen(PORT, ()=> {
    console.log(`Server is running at ${PORT}`)
})




// SQL ---> Table --> User Table
// ---> rows ---  Name   Email        Pasword
//                John   john@gmail   1234
//                ...    ...          ...


// NOSQL ---> Collection  --> User
// documents   ----  { firstname: "john", email: "john@gmail.com" address: {street: "jsdnjcnj" } }
//                   { firstname: "mark", email: "mark@gmail.com" }


// Schema --> You need to have a schema corresponde to each collection















































