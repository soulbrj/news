const connection = require('../config/config');

// 封装一个函数


exports.getmysqlfunc =  (email,collback) => {

            const sqlstr = 'SELECT *FROM `users` WHERE email=?';
            connection.query(sqlstr, email, function (error, results) {
            if(error) {
                return collback(error,null);
            }

            collback(null,results);

    })
    
}
