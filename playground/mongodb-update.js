const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c269e5ce9185c6bfbe3ca40')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // Challenge update the name of one of the users and increment the age by 1
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c26a30adad56c105283eb2d')
    }, {
        $set: { name: 'Max' },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});