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
