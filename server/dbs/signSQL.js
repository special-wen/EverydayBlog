/**
 * Created by ubuntu on 18-1-25.
 */
const signSQL = {
    insert: 'insert into user(name,password,head_path) values(?,?,?)',
    findId: 'select * from user where name=?',
    insertInfo:'insert into student(user_id,stu_name,sex,major_class,github,blog) values(?,?,?,?,?,?)',
    updateUser:'UPDATE user SET name=?,password=?,head_path=? where user_id=?',
    updateStu: 'UPDATE student SET stu_name=?,sex=?,major_class=?,github=?,blog=? where stu_id=?',
    updateType: 'UPDATE user SET type=? where user_id=?',
    myAllUser:'select * from user',
    myAllStudent:'select * from student',
    deleteStu:'delete from student where stu_id=?',
    deleteUser: 'delete from user where user_id=?',
    userInfo: 'select * from user where user_id=?',
    stuInfo: 'select * from student where user_id=?',
    findById:'select * from user where user_id=?',
    findCount:'select * from essay where user_id=?'
};

module.exports = signSQL;