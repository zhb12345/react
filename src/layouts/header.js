import React,{Component} from 'react';
import './header.css'
import {NavLink} from 'react-router-dom'
export default class Header extends Component{
  render(){
    return (
      <div className="nav">
        <ul>
          <li><NavLink activeClassName={"active"} to="/home">首页</NavLink></li>
          <li><NavLink activeClassName={"active"} to="/follow">关注</NavLink></li>
          <li><NavLink activeClassName={"active"} to="/column">栏目</NavLink></li>
        </ul>
      </div>
    )
  }
}