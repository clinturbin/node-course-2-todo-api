// Load Mongoose
let mongoose = require('mongoose');

// Tell mongoose which promise library to use
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Create a model
let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});


// Create a new instance
let newTodo = new Todo({
    text: 'Cook dinner',
    completed: false,
    completedAt: 0
});

// Save newTodo to database
newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (error) => {
    console.log('Unable to save toDo');
});

// Challenge

let otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('Unable to save to do', error);
});