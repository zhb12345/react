import React, {Component} from "react";
import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import UcButton from "../components/uc-button";
import {connect} from 'react-redux';
import {clear, updateList} from '../store/actionCreators'
class Home extends Component{
    constructor(props){
        super(props);

        //读取数据
    }
    componentDidMount(){
        //读取数据
        this.props.dispatch(clear('CLEAR_HOME'));
        this.props.dispatch(clear('CLEAR_BANNER'));
        this.props.dispatch(
            updateList({collectionName:'home',params:{_page:1,_limit:6},type:'UPDATE_HOME'})
        )
        this.props.dispatch(
            updateList({collectionName:'banner',params:{_page:1,_limit:3},type:'UPDATE_BANNER'})
        )

    }
    render() {
        let {home,banner} = this.props
        return (
            <React.Fragment>
                <UcSwiper
                    data={banner}
                    to={{pathname:'/detail',apiname:'banner'}}
                    // Url={baseUrl}
                />
                {home.map((item,index)=> <Cell
                    key={item._id}
                    index={index}
                    data={item}
                    to={{pathname:'/detail',apiname:'home'}}
                >
                    <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
                </Cell>)}
            </React.Fragment>
        )
    }
}
export default connect(state=>({home:state.home,banner:state.banner}))(Home)