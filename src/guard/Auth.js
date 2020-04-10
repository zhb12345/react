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

    let {component:Component} = this.props;// component 组件本身
    console.log(this.props)
    return <Route render={props=>(
      this.state.auth ?
        <Component {...props} data={this.state.data}/> :
        <Redirect to="/login" />
    )} />


  }
}

