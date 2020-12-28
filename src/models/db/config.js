const mongoose = require('mongoose');

const urlConnection = "mongodb://" + process.env.HOST_MONGO + ":" +
                        process.env.PORT_MONGO + "/" +
                        process.env.DB_MONGO;

mongoose.connect(urlConnection,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('Connected!');
    });

module.exports = {}