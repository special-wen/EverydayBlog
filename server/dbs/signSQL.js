/**
 * Created by ubuntu on 18-1-25.
 */
const signSQL = {
    insert: 'insert into user(name,password) values(?,?)',
    findId: 'select * from user where name=?',
    insertInfo:'insert into student(user_id,stu_name,sex,major_class,github,blog) values(?,?,?,?,?,?)',
    update:'UPDATE edit SET title=?,text=? where id=?',
    myAllUser:'select * from user',
    myAllStudent:'select * from student'
};

module.exports = signSQL;