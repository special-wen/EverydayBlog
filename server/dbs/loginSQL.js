/**
 * Created by zxw on 17-12-29.
 */

const loginSQL = {
    findUser: "select * from user where name like ?  ",
    logSql: "select * from user where name = ? and password = ?",
};
module.exports = loginSQL;