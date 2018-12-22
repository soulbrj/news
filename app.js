// 导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);



// session配置
var options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'news58',
};


var sessionStore = new MySQLStore(options);


// 配置
const app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))


// parse application/json
app.use(bodyParser.json())

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 配置express-mysql-session
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

// 统一配置express
// app.use((req,res,next) => {
//    app.locals.sessionuser = req.session.user
// })


app.use(router);
// 配置端口

// 统一处理404页面
app.use((req, res, next) => {
    res.render('404.html')
    next()
})

// 统一处理500页面
app.use((err,req,res,next)=>{
    res.render({
        code:500,
        mag:err.message
    })
})



app.listen(10002, () => {
    console.log('run it ----');
})