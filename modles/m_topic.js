const connection = require('../config/config');


exports.getmysqlfunc =  (collback) => {

    const sqlstr = 'SELECT *FROM `topics`';
    connection.query(sqlstr, function (error, results) {
    if(error) {
        return collback(error,null);
    }

    collback(null,results);

})

}



// 处理添加文章的部分
exports.getmysqlart =  (body,collback) => {

    const sqlstr = 'INSERT INTO  `topics` set ?';
    connection.query(sqlstr, body,function (error, results) {
    if(error) {
        return collback(error);
    }
    collback(null,results);
})

}



// 实现详情页的展示
exports.getmysqlfindID = (topicID,collback) => {
     const sqlstr = 'SELECT *FROM `topics` WHERE id =?';
    connection.query(sqlstr, topicID,function (error, results) {
        if(error) {
        return collback(error);
         }

        collback(null,results);
})

}


// 实现详情页的展示
exports.getmysqldelete = (topicID,collback) => {
    const sqlstr = 'DELETE  FROM `topics` WHERE id =?';
   connection.query(sqlstr, topicID,function (error, results) {
       if(error) {
       return collback(error);

        }

       collback(null,results);
})

}

// 实现详情页的修改

exports.getmysqledit = (body,topicID,collback) => {
    const sqlstr = 'UPDATE  `topics` set ? WHERE id= ?';
   connection.query(sqlstr, [body,topicID],function (error, results) {
       if(error) {
       return collback(error);
        }

       collback(null,results);
})

}

