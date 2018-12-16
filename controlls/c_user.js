const express = require('express');
const bodyParser = require('body-parser');
const mysql  = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'app'
});





connection.connect();


// 追加页面
exports.listadd = (req, res) => {
    res.render('signin.html');
}


// 实现登录功能  接收用户的数据与数据库进行对比
exports.listlogin = (req, res) => {

    const body = req.body;
    console.log(body);
    const sqlstr = 'SELECT *FROM `users` WHERE email=?';


    connection.query(sqlstr,body.email, function (error, results) {
        if (error) throw error;
        console.log(results);
    });
}


// connection.end();