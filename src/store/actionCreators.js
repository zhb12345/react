import axios from '../plugins/axios';
import qs from 'qs'

export const clear = type => ({
  type
});

export const viewGlobal = (type,payload) => ({
    type,payload
});

export const updateList = ({collectionName,type,params={_page:1,_limit:10}}) => dispatch=>{
  axios({url:`/api/goods/${collectionName}`,params})
    .then(
      res=>dispatch({type,payload:res.data.data})
    )
    .catch(
      err=>console.log('updateList',err)
    )
};

export const updateDetail = ({collectionName,_id}) => dispatch=>{
  axios({url:`/api/goods/${collectionName}/${_id}`})
    .then(
      res=>dispatch({type:'UPDATE_DETAIL',payload:res.data.data})
    )
    .catch(
      err=>console.log('updateDetail',err)
    )
};

//login reg 和获取user 的异步处理，并提交action给reducer
export const checkUser = ({
                              collection,method='post',username,password,icon,nikename
                          }) => dispatch => {

    let params=null;
    let fromData=null;

    if (collection ==='login'){
        params = new URLSearchParams();
        params.append("username",username);
        params.append("password",password);
    } else if (collection==='reg') {
        fromData = new FormData();// js类型 ,描述请求时携带的数据格式 formData URLSearchParams
        fromData.append('username',username);
        fromData.append('password',password);
        icon && fromData.append('icon',icon);
        nikename && fromData.append('nikename',nikename);
    }


    return axios({
        url:`/api/${collection}`,
        method,
        data: collection === 'login' ? params : fromData,
    }).then(
        res => {
            if (collection==='login' && res.data.err===0){
                dispatch({type:'UPDATE_USER',payload:res.data});//同步redux
                window.localStorage.setItem('user',qs.stringify(res.data));//localStorage
                return res
            }
            return res
        }
    ).catch(
        err=>console.log('checkUser',err)
    )
};
