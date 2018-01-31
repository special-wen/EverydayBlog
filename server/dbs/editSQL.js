/**
 * Created by lmy on 17-8-21.
 */
const editSQL = {
    insert: 'insert into edit(id,title,text) values(0,?,?)',
    getMyAllTitle: 'select * from essay',
    delete:'delete from essay where id=?',
    update:'UPDATE essay SET title=?,text=? where id=?;'

};

module.exports = editSQL;
