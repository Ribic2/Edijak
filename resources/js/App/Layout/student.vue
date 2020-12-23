<template>
    <v-app>
        <v-app-bar
            height="120px"
            class="primary"
            app>

            <v-toolbar-title
                class="white--text font-weight-medium display-1"
                :class="$vuetify.breakpoint.xsOnly ? 'pl-0' : 'pl-6' ">
                Edijak
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-slot:extension>
                <v-tabs
                    right
                    class="secondary"
                    align-with-title
                >
                    <v-tab
                        dark
                        v-for="item in tabs"
                        :key="item.id"
                        :ripple="false"
                        :to="item.link"
                        class="white--text"
                    >
                        {{ item.value }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            tabs: [
                {
                    "id": 1,
                    "value": "Domov",
                    "link": '/webapp'
                },
                {
                    "id": 2,
                    "value": "Obvestila",
                    "link": '/webapp/notices'
                },
                {
                    "id": 3,
                    "value": "Urnik",
                    "link": '/webapp/schedule'
                },
                {
                    "id": 4,
                    "value": "Opomnik",
                    "link": '/webapp/reminder'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
