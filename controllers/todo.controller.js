const todos = [
    {
      id: "1",
      title: "Learn Express"
    },
    {
      id: "2",
      title: "Learn JavaScript"
    },
    {
      id: "3",
      title: "Learn Web Dev"
    }
];

exports.getTodos = ((req, res) => {
    res.status(200).send({
        todos
    });
})

exports.saveTodo = ((req, res) => {
    const todo = req.body.todo;

    todos.push(todo);
    res.status(201).send({});
})

exports.updateTodo = ((req, res) => {
    const id = req.params.id; // id = 3
    const todoTitle = req.body.title;
  
    // 1. identify the index of that todo
    const updatedTodo = todos.find((todo) => todo.id === id)

    const index = todos.indexOf(updatedTodo);

    // 2. delete that todo
    todos.splice(index, 1);

    // 3. push the new tod
    todos.push({
        id: id,
        title: todoTitle
    })
  
    res.status(201).send({todos});
})
