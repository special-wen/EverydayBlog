/**
 * Created by lmy on 17-8-21.
 */
const editSQL = {
    insert: 'insert into edit(id,title,text) values(0,?,?)',
    getMyAllTitle: 'select * from edit',
    delete:'delete from edit where id=?',
    update:'UPDATE edit SET title=?,text=? where id=?;'

};

module.exports = editSQL;
