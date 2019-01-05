const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// let message = 'I am user number 3';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Don\'t trust');
// }

//-------------------------------------------------
// jwt.sign takes the object and signs it, creates that hash and returns that token value
// jwt.verify takes the token and the secret and makes sure the data was not manipulated

let data = {
    id: 10
};

let secret = '123abc';

let token = jwt.sign(data, secret);
console.log('Token: ' + token);

let decoded = jwt.verify(token, secret);
console.log('Decoded: ' + JSON.stringify(decoded));