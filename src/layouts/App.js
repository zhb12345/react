import React,{Component} from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import Loading from "../components/loading/loading";
import Header from "./header";
import Footer from "./footer";
import Home from "../pages/Home";
import Column from "../pages/Column";
import Follow from "../pages/Follow";
import User from "../pages/User";
import Login from "../pages/Login";
import Detail from "../pages/Detali";
import Reg from "../pages/Reg";
import NoPage from "../pages/NoPage";
import ShopPing from '../pages/ShopPing'
import {connect} from "react-redux";
import {viewGlobal} from "../store/actionCreators";
class App extends Component{
    state={
        bNav:true,
        bFoot:true,
        bLoading:true,
    }
    static getDerivedStateFromProps(nextProps,nextState){
        let path = nextProps.location.pathname;
        if(/home$|follow$|column$|login$|reg$|detail$|user$/g.test(path)){
            if (/home|follow|column/.test(path)){
                nextProps.dispatch(viewGlobal('UPDATE_NAV',true));
                nextProps.dispatch(viewGlobal('UPDATE_FOOT',true));
            }

            if (/login|reg|detail/.test(path)){
                nextProps.dispatch(viewGlobal('UPDATE_NAV',false));
                nextProps.dispatch(viewGlobal('UPDATE_FOOT',false));
            }

            if (/user/.test(path)){
                nextProps.dispatch(viewGlobal('UPDATE_NAV',false));
                nextProps.dispatch(viewGlobal('UPDATE_FOOT',true));
            }
        } else {
            nextProps.dispatch(viewGlobal('UPDATE_NAV',false));
            nextProps.dispatch(viewGlobal('UPDATE_FOOT',false));
        }


        return null;
    }
    render(){
        let {bNav,bFoot,bLoading} = this.props
        return (
            <div className="default">
                {bLoading ? <Loading/> : null }
                {bNav ? <Header /> : null}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/follow" component={Follow}/>
                    <Route path="/column" component={Column}/>
                    <Route path="/user" component={User}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/shopping" component={ShopPing}/>
                    <Route path="/detail/:_id" component={Detail}/>
                    <Redirect exact from="/" to="/home" />
                    <Route component={NoPage}/>
                </Switch>
                {bFoot ? <Footer/> : null}
            </div>
        )
    }
}
export default connect(
    state=>({bNav:state.bNav,bFoot:state.bFoot,bLoading:state.bLoading})
)(App)