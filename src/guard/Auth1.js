import React from 'react';

import axios from 'axios';
import {Route, Redirect} from 'react-router-dom'
import User from "../pages/User";

export default class Auth extends React.Component{

  state={
    hasSendAuthRequest:false,
    auth:false,
    data:{}
  };

  async componentDidMount(){
    console.log('auth componentDidMount');
    let res = await axios({url:'/data/user.json'});
    this.setState({
      hasSendAuthRequest:true,
      auth:res.data.auth,
      data:res.data.data
    })
  }

  /*componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate',nextState)
  }*/

  render(){
    if (!this.state.hasSendAuthRequest) return null;

    if (this.state.auth){
      return <Route path="/user" component={User} />
    } else {
      return <Redirect to="/login" />
    }


  }
}