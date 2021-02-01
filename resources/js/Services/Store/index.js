import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import User from './Modules/User'
import Schedule from "./Modules/Schedule";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        User,
        Schedule
    }
})


