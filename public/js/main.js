import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import React from 'react';
import reducer from './reducers/index';

import middleHello from './middlewares/hello';
import middleEdit from './middlewares/edit';
import middleDeleteEdit from './middlewares/deleteEdit';
import middleIndex from './middlewares/index';
import middleSignUp from './middlewares/signup';
import middleSignIn from './middlewares/login';
import middleAdmin from './middlewares/admin';
import middleSetting from './middlewares/setting';
import middleEssay from './middlewares/essay';
import middleMyHome from './middlewares/myHome';
import middleHome from './middlewares/home';
import middleHeader from './middlewares/header';
import middleDetail from './middlewares/detail';


//hello的demo,可将容器组件再次封装（可使用ownProps属性传递参数），将组件页面引入显示
import Change from './components/helloChange';

//直接将容器组件引入，通过与组件之间的相互关联，引入页面
import Edit from './containers/editChange';
import Index from './containers/index';
import SignUp from './containers/signup';
import SignIn from './containers/login';
import Admin from './containers/admin';
import  Setting from './containers/setting';
import myHome from './containers/myHome';
import Home from './containers/home';
import Header from './containers/header';
import Essay from './containers/essay';
import Detail from "./containers/detail";


const createMiddlewareStore = applyMiddleware(middleHello, middleEdit, middleDeleteEdit, middleDetail,
    middleIndex, middleSignUp, middleSignIn, middleAdmin, middleSetting, middleHome, middleHeader, middleEssay, middleMyHome)(createStore);

const store = createMiddlewareStore(reducer);

render(<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Home}/>
            <Route path='/edit' component={Edit}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/myHome' component={myHome}/>
            <Route path='/essay' components={Essay}/>
            <Route path='/detail' components={Detail}/>
        </Route>
    </Router>
</Provider>, document.getElementById("content"));
