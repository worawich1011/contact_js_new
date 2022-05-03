const mongoose = require('mongoose');

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const db = mongoose.connect(url);

mongoose.connection.on('error',(err) => {
    console.log(err);
});

mongoose.connection.once('open',() => {
    console.log("DB Connecting Success");
});
module.exports = db;
