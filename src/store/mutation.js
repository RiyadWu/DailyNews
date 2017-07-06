//action 设置修改数据
import * as types from './mutation_type'
export default{
    //note
    [types.ADD_NOTE](state,obj){
        state.notelist.push(obj);
    },
    [types.SET_NOTE](state,obj){
        state.notelist = obj;
    },
    [types.DEL_NOTE](state,num){
        state.notelist.splice(num,1) ;
    },
    [types.DO_NOTE](state,num){
        state.notelist[num].del = true ;
    },
}