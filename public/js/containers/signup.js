/**
 * Created by ubuntu on 18-1-21.
 */
import signup from "../components/signup";
import {connect} from "react-redux";
import {signUp} from "../action";
const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => ({
    onClickSignUp: () => {
        const inputArray = document.getElementsByTagName("input");
        const signUpInfo = {
            name:inputArray[0].value,
            password:inputArray[1].value,
            realName:inputArray[4].value,
            major:inputArray[5].value,
            sex:inputArray[6].value,
            git:inputArray[7].value,
            blog:inputArray[8].value,
            headPath: document.getElementById('image').src
        };
        console.log(signUpInfo.sex);
        if(signUpInfo.name === '' || signUpInfo.password === ''){
            alert("用户名或密码不能为空");
        }else{
            dispatch(signUp(signUpInfo));
        }
    },
    onSavePathClick: (e) => {
        console.log(e.target.files[0]);
        if(!e.target.files || !e.target.files[0]){
            alert('已使用默认图像');
        }else{
            //读取本地文件，以gbk编码方式输出
            // const reader = new FileReader();
            // reader.onload = function(e){
            //     document.getElementById('image').src = e.target.result;
            //     console.log(decodeURIComponent(e.target.result));
            //     //image = evt.target.result;
            // };
            // reader.readAsDataURL(e.target.files[0]);
            document.getElementById('image').src = '../../images/' + e.target.files[0].name;
        }
    }
});
const signUpLog = connect(mapStateToProps, mapDispatchToProps)(signup);
export default　signUpLog;