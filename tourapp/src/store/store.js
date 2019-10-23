import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //数据
        city: '上海',
        index: 0
    },
    actions:{ //监听
        //ctx参数代表上下文，与mutations进行通信，city是组件传递过来的数据
        //commit（）方法的作用是将city数据传递给changeCity这个方法
        changeCity(ctx,city){
            ctx.commit('changeCity',city);
        }
    },
    mutations:{ //更新
        changeCity(state,city){
            state.city = city;
        }
    }
})