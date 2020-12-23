<template>
    <v-app>
        <v-app-bar app>

        </v-app-bar>

        <v-main>
            <v-container>
                <v-card width="500px">
                    <v-card-title>
                        Prijavi se kot dijak!
                    </v-card-title>

                    <v-card-actions>
                        <v-form id="form">
                            <v-text-field
                                v-model="email"
                                placeholder="E-naslov"
                            >

                            </v-text-field>

                            <v-text-field
                                v-model="password"
                                placeholder="Geslo"
                            >

                            </v-text-field>

                            <v-btn
                                block
                                @click="login"
                            >Prijavi se</v-btn>
                        </v-form>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Api from "../../Services/Api";
export default {

    data() {
        return {
            email: null,
            password: null
        }
    },
    methods:{
        login(){
            let data = {
                "email": this.email,
                "password": this.password
            }

            Api.login(data)
            .then((response)=>{
                // Stores token
                localStorage.setItem('token', response.data.token)

                if(response.data.teacher) {
                    this.$router.push('/teacher')
                }
                else{
                    this.$router.push('/webapp/schedule')
                }
            })
        }
    }
}
</script>
