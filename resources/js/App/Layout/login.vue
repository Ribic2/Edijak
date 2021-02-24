<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Edijak</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container>
                <v-row
                    justify="center"
                >
                    <v-col
                        cols="12"
                        xl="4"
                        lg="4"
                        md="6"
                        sm="7"
                    >
                        <v-card height="400">
                            <v-card-title>
                                Prijavi se!
                            </v-card-title>

                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        v-model="user.email"
                                        placeholder="E-naslov"
                                    >

                                    </v-text-field>

                                    <v-text-field
                                        :prepend-icon="enable ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:prepend="enable = !enable"
                                        v-model="user.password"
                                        :type="enable ? 'text' : 'password'"
                                        placeholder="Geslo"
                                    >

                                    </v-text-field>

                                    <v-btn
                                        block
                                        @click="login"
                                    >Prijavi se
                                    </v-btn>
                                </v-form>

                                <v-alert type="error" class="mt-3" v-if="error">
                                    {{ error }}
                                </v-alert>

                            </v-card-text>
                        </v-card>
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
                        this.$router.push({name: 'teacher'})
                    } else {
                        this.$router.push({name: 'student'})
                    }
                }).catch((err) => {
                    this.error = err.response.data.message
                })
        }
    }
}
</script>
