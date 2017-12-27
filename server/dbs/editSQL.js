/**
 * Created by lmy on 17-8-21.
 */
const editSQL = {
    insert: 'insert into edit(id,title,text) values(0,?,?)',
    getMyAllTitle: 'select * from edit',
    delete:'delete from edit where id=?',
    //showInfo:'select * from edit where id=?'
};

module.exports = editSQL;
