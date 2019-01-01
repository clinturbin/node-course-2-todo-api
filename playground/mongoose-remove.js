const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Remove all Todos from datatbase
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Remove first matched document
// Todo.findOneAndRemove({_id: '5c2b8314a31f2a2a9acdabec'}) => this will give you back the item removed

Todo.findByIdAndRemove('5c2b8314a31f2a2a9acdabec').then((todo) => {
    console.log(todo);
});