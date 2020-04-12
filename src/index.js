import React from 'react';
import ReactDom from 'react-dom';


//引入全局样式，字体控制js
import './utils/font';
import './assets/css/index.css'

import Auth from "./layouts/default";
import {HashRouter as Router, Route} from 'react-router-dom'

import './plugins/axios'

import {serverBaseUrl,serverBaseUrl2} from './server';
React.baseUrl = serverBaseUrl;
React.baseUrl2 = serverBaseUrl2;
React.Component.prototype.baseUrl=serverBaseUrl;
React.Component.prototype.baseUrl2=serverBaseUrl2;

//引入redux配置
import store from  './plugins/redux';
import {Provider} from 'react-redux'

//强刷同步user，达到状态持久化
import qs from 'qs';
let local = window.localStorage.getItem('user');
if (local){
    store.dispatch({type:'UPDATE_USER',payload:qs.parse(local)})
}
ReactDom.render(
    <Provider store={store}>
        <Router>
            <Route component={Auth}/>
        </Router>
    </Provider>
    ,
    document.querySelector('#root'),
    ()=>console.log('react-dom render')
);

