export default {
    state:{
        selectEventDate: null
    },
    mutations:{
        SET_EVENT_DATE(state, payload){
            state.selectEventDate = payload
        }
    },
}
