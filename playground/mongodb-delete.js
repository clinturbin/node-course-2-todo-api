const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // -------------------------
    // Challenge
    //-------------------------
    // Delete all records with the name 'John'
    // db.collection('Users').deleteMany({
    //     name: 'John'
    // }).then((result) => {
    //     console.log(result);
    // });

    // Delete a record with a specific id
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5c1d70ab9e024a30dde98be3")
    }).then((results) => {
        console.log(results);
    });

    //db.close();
});