// 导包
const express = require('express');
const c_user = require('./controlls/c_user.js');
const c_topic = require('./controlls/c_topic.js');
const router = express.Router();


router.get("/signin", c_user.listadd)
.post("/signin", c_user.listlogin)
.get("/",c_topic.listuser)
.get("/topic/create",c_topic.sendtopic)
.post("/topic/create",c_topic.sendform)
.get("/signout",c_user.Signout)
.get("/detail/topic/:topicID", c_topic.topicdetail)
.get("/topic/delete/:topicID",c_topic.topicdelete)
.get("/topic/edit/:topicID",c_topic.topicedit)
.post("/topic/edit/:topicID",c_topic.topiceditgai);




module.exports = router;