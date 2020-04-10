import React,{Component} from 'react';
import {connect} from "react-redux";
import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import UcButton from "../components/uc-button";
import {clear, updateList} from '../store/actionCreators'

class Follow extends Component{
    componentDidMount(){
        this.props.dispatch(clear('CLEAR_FOLLOW'));
        this.props.dispatch(
            updateList({collectionName:'follow',params:{_page:1,_limit:6},type:'UPDATE_FOLLOW'})
        )
    }
  render(){
        let { follow } = this.props
    return (
      <div className="pt">
          {follow.map((item,index)=> <Cell
              key={item._id}
              index={index}
              data={item}
              to={{pathname:'/detail',apiname:'follow'}}
          >
              <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
          </Cell>)}
      </div>
    )
  }
}
export default connect(state=>({follow: state.follow}))(Follow)