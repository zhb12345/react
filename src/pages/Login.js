import React,{Component} from 'react';
import '../assets/css/login.css'
import UcNav from "../components/uc-nav/UcNav";
import UcButton from "../components/uc-button";
import UcInput from "../components/uc-input";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {checkUser} from "../store/actionCreators";
import store from "../plugins/redux";
import qs from 'qs'
class Login extends Component{
    state={
        username:'',
        password:'',
        errorMess:''
    }
    changeUserName=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    };
    login= ()=>{

        this.props.dispatch(
            checkUser({collection:'login',username:this.state.username,password:this.state.password})
        ).then(
            res=>{
                this.setState({errorMess:res.data.msg})
            }
        );
    };
    render(){
        let {username,password,errorMess} = this.state;
        return (
            <div className="content">
                <UcNav arrow="gray" borderWidth={0} bgColor="transparent" />
                <h1></h1>
                <div className="login-box">
                    <p className="lsolid"></p>
                    <div className="login">
                        <a onClick={()=>store.dispatch({type:'UPDATE_USER',payload:{err:1}})}>登录</a>
                        <span></span>
                        <a onClick={()=>store.dispatch({type:'UPDATE_USER',payload:{err:3}})}>注册</a>
                    </div>
                    <p className="rsolid"></p>
                </div>
                <ul>
                    <UcInput type='text' label='用户'  model={{name:'username',value:this.state.username,onChange:this.changeUserName}}></UcInput>
                    <UcInput type='password' label='密码'  model={{name:'password',value:this.state.password,onChange:this.changeUserName}}></UcInput>
                    {errorMess}
                </ul>
                <div className="footbox">
                    <UcButton style={{marginTop:'0.64rem'}} clickHandler={this.login}>登录</UcButton>
                    {/*<UcButton clickHandler={this.show.bind(null,1,2,3)}>登录录</UcButton>*/}
                    {/*<UcButton clickHandler={(ev)=>this.show(1,2,3,ev)}>登录录</UcButton>*/}
                    <a className="tishi">忘记密码？</a>
                </div>

            </div>
        )
    }
}
export default connect()(Login)