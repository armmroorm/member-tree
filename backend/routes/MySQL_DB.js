const mysql   = require("mysql");

const pool = mysql.createPool({
    connectionLimit : 10,
    host: 'rm-gs52848u487d4en01to.mysql.singapore.rds.aliyuncs.com',
    port:3306,
    user: process.env.db_user,
    password: process.env.db_password,
    database:'mall'
});


const MySQL_DB = function() {
    function _query(query, params, callback) {

        pool.query(query,params, function(err, rows, fields) {
            if (!err) {
                callback(rows);
            }else {
               callback(null, err);
            }
        })

    };

    return {
        query: _query
    };
}();

module.exports = MySQL_DB;