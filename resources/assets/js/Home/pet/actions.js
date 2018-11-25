import axios from 'axios';

export function filterByStatus(status){
    return (dispatch) =>{
        return axios.get('http://petstore.swagger.io/v2/pet/findByStatus',{params:{
            status
        }}).then((res)=>{
            console.log('filter',res);
            dispatch({
                type:'UPDATE_PETS',
                payload:res.data
            })
        })
    }
}
