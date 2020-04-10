import React,{Component} from 'react';

import '../assets/css/detail.css';
import qs from "query-string"
import zan from '../assets/img/zan.png';//图片引入，模块化使用
import xing from '../assets/img/xing.png';//图片引入，模块化使用
import fx from '../assets/img/fx.png';
import UcNav from "../components/uc-nav/UcNav";
import {connect} from 'react-redux'
import {clear, updateDetail} from '../store/actionCreators'

//图片引入，模块化使用
class Detail extends Component{
    constructor(props){
        super(props);
        let apiname = qs.parse(props.location.search).apiname;
        let _id = props.match.params._id;
        props.dispatch(clear('CLEAR_DETAIL'));

        props.dispatch(
            updateDetail({collectionName:apiname, _id})
        )
    }
    render(){
        let {data} = this.props
        return (
            <div>
                <UcNav/>
                <div className="content">
                    {/*<div className="header clear"><h2><img src="/images/head.png" alt=""/></h2><p>作者名字</p></div>*/}
                    <div className="cont">
                        <h3>{data.title}</h3>
                        <div className="time">
                            {/*<p>2019年12月04日 20:35:58 <span><img src={zan} alt=""/></span></p>*/}
                        </div>
                        <div className="text-box">
                            {data.des}
                        </div>
                    </div>
                </div>
                <div className="foot-btn">
                    <ul>
                        <li className="say"><a >
                            <i><img src={require('../assets/img/say.png')} /></i><span>0</span>
                        </a></li>
                        <li
                            className="zan"
                        ><a >
                            <i style={{background:"url(/images/zan123.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
                        </a></li>
                        <li className="xing"><a >
                            <i><img src={xing} alt=""/></i>
                        </a></li>
                        <li className="fx"><a>
                            <i><img src={fx} alt=""/></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>({data:state.detail}))(Detail)