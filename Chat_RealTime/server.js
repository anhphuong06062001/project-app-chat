const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const server = require("http").Server(app);
const io = require("socket.io")(server);



mongoose.connect('mongodb://localhost:27017/chat-app').then(() => {
    console.log('sucessful')
}).catch(() => {
    console.log('error')
})


const { Schema } = mongoose;

const MyModel = mongoose.model('chat-app', new Schema({account: {Array}} ));
// Works
MyModel.findOne(function(error, result) {
    console.log(result)
});


// const friend = new Schema({
//     account: {
//         type: Array
//     },
//     user: String,
//     password: String
// });


// const friend1 = mongoose.model('friend', friend);

// const a = friend1.find()

// console.log(a)

app.listen(3000);




