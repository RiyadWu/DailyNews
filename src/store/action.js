//action 设置修改数据
import * as types from './mutation_type'
export default{
    //note
    addNote({commit},obj){
        commit(types.ADD_NOTE,obj);
    },
    setNote({commit},obj){
        commit(types.SET_NOTE,obj);
    },
    delNote({commit},num){
        commit(types.DEL_NOTE,num);
    },
    doNote({commit},num){
        commit(types.DO_NOTE,num);
    },
}