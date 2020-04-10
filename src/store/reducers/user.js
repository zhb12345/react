//user
let initState={
  err:1,
  token:'',
  data:{}
};


//reducer
const user = (state=initState,action)=>{
  
  let {type, payload} = action;
  switch (type) {
    case 'UPDATE_USER':
      // 校验payload 是不是对象，是否还有对应的key
      return {
        err:payload.err,
        token:payload.token,
        data:payload.data,
      };
    case 'CLEAR_USER':
      return {
        err:1,
        token:'',
      };
    default:
      return state;
  }

};

export default user;