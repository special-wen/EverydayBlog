/**
 * Created by ubuntu on 17-12-31.
 */
//sayHello的action
export const sayHello = (hello) => ({
    type: 'GET_HELLO',
    hello
});
//展示登陆的用户文章列表
export const editList = () => ({
    type: 'ALL_LIST'
});
//显示被访问的用户文章列表
export const otherList = () => ({
    type: 'OTHER_LIST'
});
//点击使markdown中有对应的信息，返回check以便删除信息,为id的值
export const showInfo = (showInfo) => ({
    type:'SHOW_INFO',
    data:showInfo
});
//发布更新action，携带内容，标题信息，id
export const editPublish = (id,title,text) => ({
    type:'BUTTON_CLICK',
    text:text,
    title:title,
    id:id
});
//点击之后，删除指定的文章
export const editDelete = (id) => ({
    type: 'DELETE_USER',
    id:id
});
//当改变标题内容，有对应的markdown显示，保留check（判断其为更新还是发布）
export const editTitleChange = (check,title,text) => ({
    type:'TITLE_CHANGE',
    text:text,
    title:title,
    check:check
});
export const editTextChange = (check,text,title) => ({
    type:'TEXT_CHANGE',
    text:text,
    title:title,
    check:check
});
//清空check的值，使其为新建的，发布操作
export const clearCheck = (check,text,title) => ({
    type:'CLEAR_CHECK',
    text:text,
    title:title,
    check:check
});
//注册action,信息携带为对象
export const signUp = (signUpInfo) => ({
    type:'SIGN_UP',
    signUpInfo
});
//登录action
export const signIn = (signInInfo) => ({
    type:'SIGN_IN',
    signInInfo
});
//修改用户信息
export const FixInfo = (newInfo) => ({
    type:'UPDATE_INFO',
    newInfo
});