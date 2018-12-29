// Load Mongoose
let mongoose = require('mongoose');

// Tell mongoose which promise library to use
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Create a model
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // removes any leading or trailing white space
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// Challenge create a new mongoose User model
// setup email property (required, trim it, type equal to string, set min length to 1)
// Add new user to database
let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let newUser = new User({
    email: 'test@test.com'
});

newUser.save().then(doc => {
    console.log(JSON.stringify(doc));
}, error => {
    console.log('Unable to save User', error);
});

// Create a new instance
// let newTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 0
// });

// Save newTodo to database
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (error) => {
//     console.log('Unable to save toDo');
// });