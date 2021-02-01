<template>
    <v-app>

        <v-navigation-drawer
            app
            temporary
            v-model="toggle"
        >

        </v-navigation-drawer>

        <v-app-bar
            dark
            app
            color="#0446ff"
        >
            <v-app-bar-nav-icon @click="toggle = !toggle"></v-app-bar-nav-icon>

            <v-toolbar-title>Edijak</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-chip color="#6f63ff">
                <v-icon>
                    mdi-account
                </v-icon>
                Dobrodošel, Vid Bukovec
            </v-chip>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            toggle: false
        }
    }
}
</script>

<style scoped>

</style>
