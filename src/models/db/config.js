const mongoose = require('mongoose');

function connectDatabase(){
    const urlConnection = process.env.MONGO_CONNECTION + process.env.DB_MONGO + "?serverSelectionTimeoutMS=1000";

    mongoose.connect(urlConnection,
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected!');
        })
}

mongoose.connection.on('connected', () => {
    console.log("Database is better now");
    connectDatabase();
});

mongoose.connection.on('disconnected', () => {
    console.log("Database Disconnected");
});

mongoose.connection.on('error', err => {
    console.log(err);
});

module.exports = { connectDatabase }