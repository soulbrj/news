// 导包
const express = require('express');
const c_user = require('./controlls/c_user.js');
const c_topic = require('./controlls/c_topic.js');
const router = express.Router();


router.get("/signin", c_user.listadd)
.post("/signin", c_user.listlogin)
.get("/",c_topic.listuser);


module.exports = router;