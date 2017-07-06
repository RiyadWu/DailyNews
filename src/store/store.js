import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
import mutations from './mutation'
vue.use(vuex);
export default new vuex.Store({
    state:{
        page1: '',
    },
    actions,
    mutations,
    //获取数据方法
    getters:{
        page1(state){
            // console.log(state)
            return state.page1
        },
    }
})