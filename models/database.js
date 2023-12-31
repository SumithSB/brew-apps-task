
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = process.env.MONGO_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then((response) => {
  console.log("Connection successful")
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = db;