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


    let {path,component} = this.props;

    if (this.state.auth){
      return <Route path={path} component={component} />
    } else {
      return <Redirect to="/login" />
    }


  }
}