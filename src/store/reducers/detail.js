//detail
let initState={};


//reducer
const detail = (state=initState,action)=>{
  
  let {type, payload} = action;

  switch (type) {
    case 'UPDATE_DETAIL':
      // 校验payload 是不是的对象
      return payload;
    case 'CLEAR_DETAIL':
      // 校验payload 是不是的对象
      return {};
    default:
      return state;
  }

};

export default detail;