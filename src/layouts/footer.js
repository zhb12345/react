import React,{Component} from 'react';
import styles from "./footer.module.css";
import {NavLink} from "react-router-dom";

export default class Footer extends Component{
    render(){
        return (
            <div className={styles['foot-btn']}>
                <ul>
                    <li ><NavLink className={styles.home} activeClassName={styles['home-active']} to="/home"></NavLink></li>
                    <li ><NavLink className={styles.write} activeClassName={styles['write-active']} to={'/shopping'}></NavLink></li>
                    <li ><NavLink className={styles.my} activeClassName={styles['my-active']} to="/user"></NavLink></li>
                </ul>
            </div>
        )
    }
}