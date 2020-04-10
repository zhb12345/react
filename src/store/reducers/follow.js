let initState=[];//follow


//reducer
const follow = (state=initState,action)=>{
  
  let {type, payload} = action;

  switch (type) {
    case 'UPDATE_FOLLOW':
      // 校验payload 是不是数组
      return payload;
    case 'CLEAR_FOLLOW':
      // 校验payload 是不是数组
      return [];
    default:
      return state;
  }

};

export default follow;