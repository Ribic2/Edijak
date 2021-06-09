import { Factory } from "../../Api/Factory"
import Axios from 'axios'
const User = Factory.get('User')

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
        async setUser({commit}){
            Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
            if(localStorage.getItem('token') != null){
                await User.getUser()
                    .then((res)=>{
                        if(!res.data.user){
                            localStorage.clear();
                            window.location.href = "/"
                        } else {
                            commit('SET_USER', res.data.user)
                        }
                    })
            }
        },
    }
}
