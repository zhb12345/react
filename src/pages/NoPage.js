import React, {Component} from "react";
import {Link} from 'react-router-dom'
export default class NoPage extends Component{
    render() {
        return (
            <React.Fragment>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <h2>404</h2>
                <Link to={'/home'}>回到首页</Link>
            </React.Fragment>
        )
    }
}