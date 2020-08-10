import Vue from 'vue';
import Vuex from 'vuex';
import count from './count'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    countType: 'sku'
  },
  getters: {
    filterCount(state) {
      return state.count>10 ? 10: state.count;
    }
  },
  mutations: {
    countAdd(state, args=1) {
      state.count += args;
    }
  },
  actions: {
    countAddAsync({commit}, args) {
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          commit('countAdd', args);
          resolve();
        }, 1000);
      })
    }
  },
  modules: {
  },
});


// VueX模块化
// export default new Vuex.Store({
//   modules: {
//     count
//   }
// })