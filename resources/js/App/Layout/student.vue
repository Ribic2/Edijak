<template>
    <v-app>
        <v-navigation-drawer
            app
            temporary
            v-model="toggle"
        >
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon>mdi-account-outline</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ user.name }} {{ user.surname }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item-group>
                    <v-list-item v-for="(route, index) in routes" :key="index" :to="{name: route.path}">
                       {{ route.name }}
                    </v-list-item>

                    <v-list-item @click="logout">
                        Odjava
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            dark
            app
            color="primary"
        >
            <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>

            <v-toolbar-title>Edijak</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-chip color="secondary">
                <v-icon>
                    mdi-account
                </v-icon>
                Dobrodošel, {{ user.name }} {{ user.surname }}
            </v-chip>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>

        <!-- Snackbars that displays information -->
        <v-snackbar
            color="success"
            v-model="triggerSnackbar"
        >
            {{ newEventResponse }}
        </v-snackbar>
    </v-app>
</template>

<script>
import {Factory} from "../../Services/Api/Factory"
import { mapState } from 'vuex'
const User = Factory.get('User')

export default {
    name: "Index",
    data() {
        return {
            toggle: false,
            newEventResponse: null,
            triggerSnackbar: false,
            routes: [
                {
                    name: 'Domov',
                    path: 'home'
                },
                {
                    name: 'Sporočila',
                    path: 'messages'
                }
            ]
        }
    },
    methods:{
        logout(){
            this.$store.commit('LOGOUT');
        }
    },
    mounted() {
        // Listens for broadcast
        Echo
            .listen('edijak', 'UpdateNewEvent', (e)=>{
                this.newEventResponse = e.response
                this.triggerSnackbar = true
            })
    },
    beforeMount() {
        User.getUser()
        .then((res)=>{
            this.$store.dispatch('setUser', res.data)
        })
    },
    computed:mapState({
        user: state => state.User.user
    })
}
</script>
