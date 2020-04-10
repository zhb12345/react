import React,{Component} from 'react';
import {connect} from 'react-redux';
import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import UcButton from "../components/uc-button";
import {clear, updateList} from '../store/actionCreators'

class Column extends Component{
    componentDidMount(){
        this.props.dispatch(clear('CLEAR_COLUMN'));
        this.props.dispatch(
            updateList({collectionName:'column',params:{_page:1,_limit:6},type:'UPDATE_COLUMN'})
        )
    }
  render(){
      let {column} = this.props
    return (
      <div className="pt">
          <div className="pt">
              {column.map((item,index)=> <Cell
                  key={item._id}
                  index={index}
                  data={item}
                  to={{pathname:'/detail',apiname:'column'}}
              >
                  <UcButton style={{float:'right'}} size="mini" clickHandler={this.show}>+</UcButton>
              </Cell>)}
          </div>

      </div>
    )
  }
}
export default connect(state=>({column:state.column}))(Column)