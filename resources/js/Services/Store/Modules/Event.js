export default {
    state:{
        response: false,
        selectEventDate: null,
        spinner: false,

        // response
        responseText: null,
        responseIcon: null,
        responseColor: null
    },
    mutations:{
        SET_EVENT_DATE(state, payload){
            state.selectEventDate = payload
        }
    },
}
