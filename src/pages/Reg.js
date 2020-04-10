import React, {Component} from "react";
import UcNav from "../components/uc-nav/UcNav";
import UcInput from "../components/uc-input";
import '../assets/css/login.css'
import UcButton from "../components/uc-button";
import {Link} from "react-router-dom";
import store from "../plugins/redux";
import {checkUser} from "../store/actionCreators";

class Reg extends Component{
    state={
        username:'',
        password:'',
        errorMess:'',
    }
    changeUserName=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    };
    reg = ()=>{
        let {username,password} = this.state;
        store.dispatch(
            checkUser({collection:'reg',username,password,icon:this.file.files[0]})
        ).then(
            res=>{
                if (res.data.err===0){
                    store.dispatch({type:'UPDATE_USER',payload:{err:1}})
                } else {
                    this.setState({errorMess:res.data.msg})
                }
            }
        )



    };
    render() {
        let {username,password,errorMess} = this.state;
        return (
            <div className="content">
                <UcNav arrow="gray" borderWidth={0} bgColor="transparent" />
                <h1 onClick={()=>this.file.click()}></h1>
                <input type="file" ref={el=>this.file=el} style={{visibility: "hidden"}}/>
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
                </ul>
                <div className="footbox">
                    <UcButton style={{marginTop:'0.64rem'}} clickHandler={this.reg}>注册</UcButton>
                    {/*<UcButton clickHandler={this.show.bind(null,1,2,3)}>登录录</UcButton>*/}
                    {/*<UcButton clickHandler={(ev)=>this.show(1,2,3,ev)}>登录录</UcButton>*/}
                    <a className="tishi">忘记密码？</a>
                </div>

            </div>
        )
    }
}

export default Reg