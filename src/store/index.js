import Vuex from 'vuex'
import tab from './tab'
import Vue from 'vue'

Vue.use(Vuex)

// 创建vuex实例
export default new Vuex.Store({
    modules: {
        tab
    }
})