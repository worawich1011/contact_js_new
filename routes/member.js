const express = require('express');
const { getmember, createmember, loginMember} = require('../controllers/member')
const route = express.Router();

route.get('/',getmember);
route.post('/login', loginMember);
route.post('/',createmember);

module.exports = route;