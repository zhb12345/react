let initState=[];//home


//reducer
const home = (state=initState,action)=>{

  let {type, payload} = action;

  switch (type) {
    case 'UPDATE_HOME':
      // 校验payload 是不是数组
      return payload;
    case 'CLEAR_HOME':
      // 校验payload 是不是数组
      return [];
    default:
      return state;
  }

};

export default home;