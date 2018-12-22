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
        
        req.session.user = results[0];

        // console.log(req.session.user);

        if (results.length == 0) {
            return res.send({
                code: 1,
                msg: '用户名不存在'
            })
        }

        
        // 验证密码是否正确
        if (body.password === results[0].password) {
            return res.send({
                code: 2,
                msg: '密码正确登录成功'
            })
        }

       
     
        
            // 把req.session.user 写入到mysql中

        res.send({
            code: 3,
            msg: '密码错误'
        })

       

    });
}


// 退出功能
exports.Signout = (req,res) => {
    // 清除session
    delete req.session.user;

    // 跳转页面到登录页
    res.redirect('/signin');

}


  