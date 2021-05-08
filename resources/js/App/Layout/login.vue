<template>
    <v-app>
        <v-app-bar absolute color="primary" dark>
            <v-toolbar-title>Edijak</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-row
                    class="row-height"
                    align-content="center"
                    justify="center"
                >
                    <v-col
                        cols="12"
                        xl="3"
                        lg="4"
                        md="5"
                        sm="7"
                    >
                        <v-expand-transition>
                            <v-card
                                color="accent"
                                min-height="250"
                                :elevation="$vuetify.breakpoint.mobile ? 0 : 5"
                            >
                                <v-card-title>
                                    Prijavi se
                                </v-card-title>

                                <v-card-text>
                                    <v-form>
                                        <v-text-field
                                            :prepend-icon="'mdi-email'"
                                            v-model="user.email"
                                            placeholder="E-naslov"
                                        >
                                        </v-text-field>

                                        <v-text-field
                                            :prepend-icon="'mdi-lock'"
                                            :append-icon="enable ? 'mdi-eye' : 'mdi-eye-off'"
                                            @click:append="enable = !enable"
                                            v-model="user.password"
                                            :type="enable ? 'text' : 'password'"
                                            placeholder="Geslo"
                                        >
                                        </v-text-field>

                                        <v-btn
                                            block
                                            color="info"
                                            @click="login"
                                        >Prijavi se
                                        </v-btn>
                                    </v-form>

                                    <v-expand-transition>
                                        <v-alert type="error" class="mt-3" v-if="error">
                                            {{ error }}
                                        </v-alert>
                                    </v-expand-transition>

                                </v-card-text>
                            </v-card>
                        </v-expand-transition>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

import {Factory} from "../../Services/Api/Factory";
const User = Factory.get('User')

export default {
    data() {
        return {
            user: {
                email: null,
                password: null
            },
            // Error message
            error: null,
            enable: false
        }
    },
    methods: {
        login() {
            User.login(this.user)
                .then((response) => {
                    // Logs in user and sets localstorage and Vuex store
                    // If credentials are correct
                    localStorage.setItem('token', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)

                    // Depending on the role of logged in user redirects happens
                    // If user if found to be a teacher, it is redirected to /teacher
                    // else it's redirected to /webapp
                    if (response.data.teacher) {
                        window.location.href = "/teacher"
                    } else {
                        window.location.href = "/webapp"
                        // this.$router.push({name: 'student'})
                    }
                })
        }
    }
}
</script>

<style>
    .row-height{
        height: 100vh;
    }
    .row-height:nth-child(1){
        background-image: url("https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb");
        background-size: cover;
    }
</style>
