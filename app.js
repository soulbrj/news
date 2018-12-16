// 导包
    const express = require('express');
    const router = require('./router.js');

// 配置
    const app = express();

    app.engine('html', require('express-art-template'));
    app.set('view options', {
        debug: process.env.NODE_ENV !== 'production'
    });

    app.use('/public',express.static('./public'));
    app.use('/node_modules',express.static('./node_modules'));



    app.use(router);
// 配置端口
    app.listen(10002,() => {
    console.log('run it ----');  
})
