import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import User from './Modules/User'
import Schedule from "./Modules/Schedule";
import Event from "./Modules/Event";
import Group from "./Modules/Group";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        User,
        Schedule,
        Event,
        Group
    }
})


