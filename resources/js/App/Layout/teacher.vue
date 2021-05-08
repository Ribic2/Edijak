<template>
    <v-app>
        <v-navigation-drawer
            temporary
            color="primary"
            v-model="toggle"
            app
        >
            <v-list>
                <v-list-item>
                    <router-link :to="{name: 'teacherHome'}" style="width: 100%">
                        <v-btn block elevation="0" :ripple="false" color="info" rounded>Urnik</v-btn>
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link :to="{name: 'teacherLive'}" style="width: 100%">
                        <v-btn block elevation="0" :ripple="false" color="info" rounded>V živo</v-btn>
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link :to="{name: 'groups'}" style="width: 100%">
                        <v-btn block elevation="0" :ripple="false" color="info" rounded>Razredi</v-btn>
                    </router-link>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            dark
            color="secondary"
        >
            <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>
            <v-toolbar-title>Eteacher</v-toolbar-title>


            <v-spacer></v-spacer>
            <v-btn
                color="secondary"
                :ripple="false"
                :elevation="0"
                @click="logout()"
                rounded
            >
                <v-icon>mdi-logout</v-icon>
                Odjavi se
            </v-btn>
        </v-app-bar>

        <v-main>
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </v-main>

        <!-- Spinner -->
        <v-overlay v-if="$store.state.Event.spinner">
            <v-progress-circular :size="100" indeterminate
            ></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
import moment from "moment";
import {Factory} from "../../Services/Api/Factory"
const User = Factory.get('User')

export default {
    name: "teacher",
    data() {
        return {
            toggle: false
        }
    },
    beforeMount() {
        this.$store.dispatch('setUser')
    },
    mounted() {
        moment.updateLocale('sl', 'sl')
    },
    methods: {
        logout() {
            this.$store.commit('LOGOUT');
        }
    }
}
</script>

<style scoped>
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(2em);
}

.fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
}
</style>
