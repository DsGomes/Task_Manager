const mongoose = require('mongoose');

var serverUp = true;

function connectDatabase(){
    const urlConnection = process.env.MONGO_CONNECTION + process.env.DB_MONGO + "?serverSelectionTimeoutMS=1000";

    mongoose.connect(urlConnection,
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected!');
            serverUp = true;
        })
}

mongoose.connection.on('connected', () => {
    if(!serverUp){
        console.log("Database is better now");
        connectDatabase();
    }
});

mongoose.connection.on('disconnected', () => {
    console.log("Database Disconnected");
    serverUp = false;
});

mongoose.connection.on('error', err => {
    console.log(err);
    serverUp = false;
});

module.exports = { connectDatabase }