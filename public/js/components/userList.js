import React, {Component} from 'react';


export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: null,
            role: null
        }
    }

    componentWillMount() {
        this.props.OnDisplayUsers();
    }

    deleteUser(id) {
        this.props.onDeleteUser({id});
    }

    modifyUser() {
        this.props.onModifyUser({
            id: this.state.id,
            name: this.state.name,
            role: this.state.role
        });
    }

    onChangeName() {
        this.setState({
            name: this.refs.name.value
        });
    }

    onChangeRole() {
        this.setState({
            role: this.refs.role.value
        });
    }

    onChageId(id) {
        this.setState({
            id: id
        })
    }

    findUser() {
        const findUserName = this.refs.findUserName.value;
        this.props.onFindUser(findUserName);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFlag === true) {
            alert("删除成功！");
            window.location.reload(); //reload the page auto;

        } else if (nextProps.deleteFlag === false) {
            alert("删除失败！");
            window.location.reload();
        }

        if (nextProps.updateFlag === true) {
            alert("修改成功！");
            window.location.reload();
        } else if (nextProps.updateFlag === false) {
            alert("修改失败！");
            window.location.reload();

        }

        if (nextProps.findFlag === true) {
            alert("查找成功！");
        } else if (nextProps.findFlag === false) {
            alert("查找失败！");
        }


    }

    render() {
        const userList = this.props.user.map((user, id) => {

            return <div key={id}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td className="col">{user.id}</td>
                        <td className="col">{user.name}</td>
                        <td className="col">{user.role}</td>

                        <td>
                            <button className="btn btn-primary distance"
                                    onClick={this.deleteUser.bind(this, user.id)}>
                                删除
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-primary "
                                    data-toggle="modal" data-target="#myModal"
                                    onClick={this.onChageId.bind(this, user.id)}>
                                修改
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div className="margin">
            <div>
                <h2 className="top">用户信息管理</h2>
                {/*<button className="quite">退出</button>*/}
            </div>
            <div>
                <button className="btn btn-primary addUserButton">添加</button>

                <input type="text" className="findInput" ref="findUserName"/>
                <button className="btn btn-primary "
                        onClick={this.findUser.bind(this)}>查找
                </button>

            </div>
            <table>
                <tbody>
                <tr>
                    <th className="col-th">序号</th>
                    <th className="col-th">姓名</th>
                    <th className="col-th">职权</th>
                </tr>
                </tbody>
            </table>

            <div>{userList}</div>

            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">用户信息</h4>
                        </div>

                        <div className="modal-body">
                            用户名：<input type="text" ref="name"  onChange={this.onChangeName.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            权限：<input type="text" ref="role" onChange={this.onChangeRole.bind(this)}/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default"
                                    data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" onClick={this.modifyUser.bind(this)}>
                                提交更改
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    }
}