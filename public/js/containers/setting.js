/**
 * Created by ubuntu on 18-1-29.
 */
import setting from "../components/setting";
import {connect} from "react-redux";
import {FixInfo} from "../action";
const mapStateToProps = (state) => {
    return {
        username: state.setting.oldInfo.username,
        password: state.setting.oldInfo.password,
        realName: state.setting.oldInfo.realName,
        major_class: state.setting.oldInfo.major_class,
        github: state.setting.oldInfo.github,
        blog: state.setting.oldInfo.blog,
        sex: state.setting.oldInfo.sex,
        id: state.setting.oldInfo.id,
        headPath:state.setting.oldInfo.headPath
    };
};
const mapDispatchToProps = (dispatch) => ({
    userINFO: () => {
        dispatch({type:'OLD_INFO'})
    },
    onClickFixInfo: () => {
        const inputArray = document.getElementsByTagName("input");
        const newInfo = {
            name:inputArray[0].value,
            password:inputArray[1].value,
            realName:inputArray[4].value,
            major:inputArray[5].value,
            sex:inputArray[6].value,
            git:inputArray[7].value,
            blog:inputArray[8].value,
            id: inputArray[9].id,
            headPath: document.getElementById('image').src
        };
        if(newInfo.name === '' || newInfo.password === ''){
            alert("用户名或密码不能为空");
        }else{
            dispatch(FixInfo(newInfo));
        }
    },
    onChange: (e) => {
        const inputArray = document.getElementsByTagName("input");
        if(e.target.id === 'name'){
            const newInfo = {
                name:e.target.value,
                password:inputArray[1].value,
                realName:inputArray[4].value,
                major:inputArray[5].value,
                sex:inputArray[6].value,
                git:inputArray[7].value,
                blog:inputArray[8].value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"USERNAME_CHANGE",data:newInfo});
        }else if(e.target.id === 'password'){
            const newInfo = {
                name:inputArray[0].value,
                password:e.target.value,
                realName:inputArray[4].value,
                major:inputArray[5].value,
                sex:inputArray[6].value,
                git:inputArray[7].value,
                blog:inputArray[8].value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"PASSWORD_CHANGE",data:newInfo});
        }else if(e.target.id === 'realName'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:e.target.value,
                major:inputArray[5].value,
                sex:inputArray[6].value,
                git:inputArray[7].value,
                blog:inputArray[8].value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"REALNAME_CHANGE",data:newInfo});
        } else if(e.target.id === 'major'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[4].value,
                major:e.target.value,
                sex:inputArray[6].value,
                git:inputArray[7].value,
                blog:inputArray[8].value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"MAJORCLASS_CHANGE",data:newInfo});
        } else if(e.target.id === 'gitAddress'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[4].value,
                major:inputArray[5].value,
                sex:inputArray[6].value,
                git:e.target.value,
                blog:inputArray[8].value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"GITHUB_CHANGE",data:newInfo});
        } else if(e.target.id === 'blogAddress'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[4].value,
                major:inputArray[5].value,
                sex:inputArray[6].value,
                git:inputArray[7].value,
                blog:e.target.value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"BLOG_CHANGE",data:newInfo});
        } else if(e.target.id === 'sex'){
            const newInfo = {
                name:inputArray[0].value,
                password:inputArray[1].value,
                realName:inputArray[4].value,
                major:inputArray[5].value,
                sex:e.target.value,
                git:inputArray[7].value,
                blog:inputArray[8].value,
                id: inputArray[9].id,
                headPath: document.getElementById('image').src
            };
            dispatch({type:"SEX_CHANGE",data:newInfo});
        }
    },
    onSavePathClick: (e) => {
        console.log(e.target.files[0]);
        if(!e.target.files || !e.target.files[0]){
            alert('已使用默认图像');
        }else{
            document.getElementById('image').src = '../../images/' + e.target.files[0].name;
        }
    }
});
const signUpLog = connect(mapStateToProps, mapDispatchToProps)(setting);
export default　signUpLog;