/**
 * Created by lmy on 17-8-21.
 */
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "zxwzxwzxw",
    database: 'dailySummary',
    port: 3306
});
connection.connect((err)=> {
    if (err) {
        console.log('err' + err.stack);
        return;
    }
    console.log('connected success!!!');
});
module.exports = connection;

