import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        numero : 0
    },

    mutations:{
        Somar(state){
            return state.numero++
         },
         Subtrair(state){
            return state.numero--
         }
    }
})