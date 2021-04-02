export default {
    state:{
        user: []
    },
    mutations:{
        SET_USER(state, payload){
            state.user = payload
        },
        LOGOUT(state){
            localStorage.clear()
            state.user = []

            window.location.href = "/"
        }
    },
    actions:{
        setUser({commit}, data){
            commit('SET_USER', data)
        },
    }
}
