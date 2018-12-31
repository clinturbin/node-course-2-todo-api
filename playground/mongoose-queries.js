const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let todoId = '5c2a58179e834224bec0e0b5';  // coorect id
// let todoId = '6c2a58179e834224bec0e0b5';   // incorrect id
// let todoId = '5c2a58179e834224bec0e0b511';   // invalid id

if (!ObjectID.isValid(todoId)) {
    console.log('ID not valid');
}

// Todo.find({
//     _id: todoId
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: todoId
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

Todo.findById(todoId).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo: ', todo);
}).catch((e) => {
    console.log(e);
});

let userId = '5c27d82c69b60617d9b37b68';        // correct id
// let userId = '6c27d82c69b60617d9b37b68';     // incorrect id
// let userId = '5c27d82c69b60617d9b37b68111';  // invalid id

User.findById(userId).then((user) => {
    if (!user) {
        return console.log('User id not found');
    }
    console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e);
});