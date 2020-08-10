export default {
    namespaced: true,
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
            resolve('asyncCount---');
            }, 1000);
        })
        }
    },
}