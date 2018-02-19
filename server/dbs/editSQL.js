/**
 * Created by lmy on 17-8-21.
 */
const editSQL = {
    insert: 'insert into essay(user_id,title,text) values(?,?,?)',
    getMyAllTitle: 'select * from essay where user_id=?',
    getAllEssay:'select * from essay',
    delete:'delete from essay where ess_id=?',
    update:'UPDATE essay SET title=?,text=? where ess_id=?;',
    essList:'select * from essay where ess_id=?',
    getLimitEssay:'select * from essay order by ess_id desc limit 10'

};

module.exports = editSQL;