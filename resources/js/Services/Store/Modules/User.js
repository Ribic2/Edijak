export default {
    state:{
        user: null
    },
    mutations:{
        SET_USER(state, payload){
            state.user = payload
        }
    },
    actions:{
        setUser({commit}, data){
            commit('SET_USER', data)
        }
    }
}
