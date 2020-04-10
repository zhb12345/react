import React from 'react';

import axios from 'axios';
import {Route, Redirect} from 'react-router-dom'

export default class Auth extends React.Component{

  state={
    hasSendAuthRequest:false,
    auth:false,
    data:{}
  };

  async componentDidMount(){
    let res = await axios({url:'/data/user.json'});
    this.setState({
      hasSendAuthRequest:true,
      auth:res.data.auth,
      data:res.data.data
    })
  }

  render(){
    if (!this.state.hasSendAuthRequest) return null;


    let {component:Component} = this.props;// component 组件本身    <User />
    return <Route render={(props)=>{

      if (this.state.auth){
        // ...props 路由上下文，和接受到的props    data 例外包装上去的数据，数据预载
        return <Component {...props} data={this.state.data}/>
      }else{
        return <Redirect to="/login" />
      }

    }} />


  }
}

