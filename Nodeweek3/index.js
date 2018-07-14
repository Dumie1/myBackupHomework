'use strict';

// TODO: Write the homework code in this file

const Express = require('express');

const PORT = 3000;

const app = Express();

// request body parser
app.use(Express.json());

const uuid = require('uuid/v4');
const { readFile, writeFile} = require('fs');
const { promisify } = require('util');
const readFileWithPromise = promisify(readFile);
const writeFileWithPromise = promisify(writeFile);
const TODO_PATH = 'todo.json';

function readTodos() {
  return readFileWithPromise(TODO_PATH, 'utf8').then(
    JSON.parse, () => []
  );
}

function writeTodos(data) {
  return writeFileWithPromise(TODO_PATH, JSON.stringify(data, null, 2));
}

// createTodo
app.post('/todos', async(req, res, next) => {
  const newTodo = req.body;
  newTodo.id = uuid();

  const todos = await readTodos();
  todos.push(newTodo);
  await writeTodos(todos);

  res.json(todos);
});

// readTodos
app.get('/todos', async(req, res) => {
  const todos = await readTodos();
  res.json(todos);
});

// updateTodo
app.put('/todos/:id', (req, res) => {

});

// deleteTodo
app.delete('/todos/:id', async(req, res) => {
  const todoId = Number(req.params.id);

  // readTodosFile()
  //     .then(data => {
  //         return data.filter(todo => todo.id !== todoId)
  //     }).then(newArray => {
  //         writeTodosFile(newArray)
  //     }).then(() => {
  //         res.status(200).json({ message: "todo successfully deleted" })
  //     }).catch(err => console.error(err))

  try {
    const todos = await readTodos();
    const newTodos = todos.filter(todo => todo.id !== todoId);

    writeTodos(newTodos);

    res.status(200).json({ message: 'todo successfully deleted' });
  }
  catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// readTodo
app.get('/todos/:id', async(req, res) => {
  const id = req.params.id;
  const todos = await readTodos();

  const todo = todos.find(function(singleTodo) {
    return singleTodo.id === id;
  });

  res.json(todo);
});

// clearTodos
app.delete('/todos', async(req, res) => {
  await writeTodos([]);
  res.json([]);
});

// markAsDone
app.post('/todos/:id/done', async(req, res) => {
  const todoId = Number(req.params.id);
  try {
    const todos = await readTodos();
    // create new array with map
    // loop through the todos array, checking for todo with id in request
    // if todo object has request id, change JUST the done property
    // otherwise, return the todo object exactly as it is in new array

    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, done: true }; // changes just one property of todo
      }
      return todo; // return original todo object, without altering
    });

    writeTodos(newTodos); // update todos file, overwrite with new todos

    res.status(200).json({ success: true });
  }
  catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
// markAsNotDone
app.delete('/todos/:id/done', async(req, res) => {
  const todoId = Number(req.params.id);
  try {
    const todos = await readTodos();
    // create new array with map
    // loop through the todos array, checking for todo with id in request
    // if todo object has request id, change JUST the done property
    // otherwise, return the todo object exactly as it is in new array

    const newTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, done: false }; // changes just one property of todo
      }
      return todo; // return original todo object, without altering
    });

    writeTodos(newTodos); // update todos file, overwrite with new todos

    res.status(200).json({ success: true });
  }
  catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// TODO: implement readTodo, clearTodos, markAsDone and markAsNotDone routes and actions

// error handling
app.use((error, req, res, next) => {
  res.status(500).send({ error });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));


// https://github.com/azat-co/todo-express/blob/master/routes/tasks.js
