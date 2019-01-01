# Todo-API  

## This is a project from The Complete Node.js Developer Course (2nd Edition)  

This project will be using MongDB for a database  

To use MongoDB:  
    - Download MongoDB  
    - Double click the downloaded file to unpack file contents
    - Rename file to 'mongo'
    - Move 'mongo' file to home directory
    - Create file called 'mongo-data'
    
    - To Run MongoDB:
        - cd ~/mongo/bin/
        - ./mongod --dbpath ~/mongo-data

    - Installing Mongoose
        - 

Packages to install for testing:
    - npm install expect mocha nodemon supertest --save-dev

Deploy API to Heroku
    - In terminal create a new heroku app
        - heroku create
    - In terminal tell app we want to use mLab  (mongo lab)
        - heroku addons:create mongolab:sandbox
    - (Optional: get a list of configuration variables)
        - heroku config
    - Modify mongoose.js file to either connect to heroku or local machine
        - mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
    - In terminal:
        - 
