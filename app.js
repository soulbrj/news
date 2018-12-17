// 导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');
const session = require('express-session');
// 配置
const app = express();


// session配置
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
    }))


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



app.use(router);
// 配置端口
app.listen(10002, () => {
    console.log('run it ----');
})