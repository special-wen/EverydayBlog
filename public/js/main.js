import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import reducer from './reducers/index';
import middleHello from './middlewares/hello';
import middleLogin from './middlewares/login';
import middleUserList from './middlewares/userList';

import middleEdit from './middlewares/edit';
import middleDeleteEdit from './middlewares/deleteEdit';


import Hello from './containers/hello';
import Edit from './containers/edit';
import Login from './containers/login';
import UserList from './containers/userList';

const createMiddlewareStore = applyMiddleware(middleHello,middleLogin,middleUserList,middleEdit,middleDeleteEdit)(createStore);

const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Hello}/>
        <Route path='/edit' component={Edit}/>
        <Route path='/login' component={Login}/>
        <Route path="/userList" component={UserList}/>
    </Router>
</Provider>, document.getElementById("content"));
