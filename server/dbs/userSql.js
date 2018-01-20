/**
 * Created by zxw on 17-12-29.
 */

let UserSQL = {
    logSql:'select * from user where name = ? and passward = ?',

    insert: 'insert  user(id,name,password,role) values (null,?,?,?)',
    queryAll: 'select * from user',
    update: 'update user set name=?,role=? where id = ?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    registerSql: "insert into user(id,name,password,role) select null,?,?,0 " +
    "from dual where not exists(select name from user where name = ?)",
    //判断输入的名字是否存在，存在则不插入
    findUser: "select * from user where name like ?  ",

    selectMovies: "select * from movies",
    deleteMovie: "delete from movies where movieId = ?",
    modifyMovie: "update movies set movieName=?,movieLead=?,movieAct=?," +
    "movieDuration=?,movieInfo=?" +
    " where  movieId= ?",
    addMovie: 'insert into `movies` set ?',  //数据库操作语法糖，直接匹配相应字段
    findMovie: "select * from movies where movieName like ?  ",
};

module.exports = UserSQL;
