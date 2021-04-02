import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
    icons:{
        iconfont: 'mdi'
    },
    theme:{
        themes:{
            light:{
                primary: '#1F4C73',
                secondary: '#375CA6',
                info: '#46858C',
                accent: '#F2F2F0'
            }
        }
    }
})
