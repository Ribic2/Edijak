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
                primary: '#6695F2',
                secondary: '#6BA5F2',
                error: '#F28DA8',
                info: '#57F2D6',
                accent: '#F2F2F2'
            }
        }
    }
})
