/**
 * Created by lmy on 17-8-21.
 */
const editSQL = {
    insert: 'insert into essay(id,title,text) values(0,?,?)',
    getMyAllTitle: 'select * from essay',
    delete:'delete from edit where id=?',
    update:'UPDATE essay SET title=?,text=? where id=?;',
    getLimitEssay:'select * from essay order by ess_id desc limit 10'

};

module.exports = editSQL;
