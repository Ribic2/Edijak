require('./bootstrap');
window.Vue = require('vue');

import App from './App'
import router from "./Services/Router";
import Vuetify from "./Services/Vuetify";
import store from './Services/Store/index';

const app = new Vue({
    router,
    store,
    vuetify: Vuetify,
    el: '#app',
    render: h => h(App)
});
