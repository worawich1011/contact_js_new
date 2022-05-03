const express = require('express');
const cors = require('cors');
const app = express();
const router = require('express').Router();
require('dotenv').config();
const bodyParser = require('body-parser');

const db = require('./database');

// const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_POST || '3000';

router.use('/', require('./routes/'));

app.use(cors());
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/www"));
app.use(router);

app.listen(port, () => {
    console.log("Start Server on Port " + port);
});
