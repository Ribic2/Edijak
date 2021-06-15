<template>
    <v-app>
        <v-navigation-drawer
            temporary
            v-model="toggle"
            app
        >
            <v-list-item>
                <v-list-item-avatar>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ user.name }} {{ user.surname }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item-group>
                <v-list-item :to="{name: 'teacherHome'}" style="width: 100%">
                    Urnik
                </v-list-item>
                <v-list-item :to="{name: 'teacherLive'}" style="width: 100%">
                   V živo
                </v-list-item>
                <v-list-item :to="{name: 'groups'}" style="width: 100%">
                  Razredi
                </v-list-item>
            </v-list-item-group>
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
import {mapState} from "vuex";

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
    },
    computed: mapState({
        user: state => state.User.user
    })
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
