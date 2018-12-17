const express = require('express');
const mysqlfunc = require('../modles/m_users');



// 追加页面
exports.listadd = (req, res) => {
    res.render('signin.html');
}


// 实现登录功能  接收用户的数据与数据库进行对比
exports.listlogin = (req, res) => {
    const body = req.body;

    mysqlfunc.getmysqlfunc(body.email, (error, results) => {

        if (results.length == 0) {
            return res.send({
                code: 1,
                msg: '用户名不存在'
            })
        }
        // console.log(results[0].email);
        // 验证密码是否正确
        if (body.password === results[0].password) {
            return res.send({
                code: 2,
                msg: '密码正确登录成功'
            })
        }

        res.send({
            code: 3,
            msg: '密码错误'
        })

    });
}


  