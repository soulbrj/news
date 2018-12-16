// 导包
const express = require('express');
const c_user = require('./controlls/c_user.js');
const router = express.Router();


// 配置路由
router.get('/signin', c_user.listadd);


router.get('/signin', c_user.listlogin).post("/signin", c_user.listlogin);



module.exports = router;