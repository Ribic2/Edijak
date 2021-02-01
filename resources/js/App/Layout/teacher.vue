<template>
    <v-app>
        <v-navigation-drawer
            app
        >
            <v-list>
                <v-list-item>
                   <router-link :to="{name: 'teacherHome'}" style="width: 100%">
                       <v-btn block elevation="0" :ripple="false">Urnik</v-btn>
                   </router-link>
                </v-list-item>
                <v-list-item>
                   <router-link :to="{name: 'teacherLive'}" style="width: 100%">
                       <v-btn block elevation="0" :ripple="false">V živo</v-btn>
                   </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link :to="{name: 'groups'}" style="width: 100%">
                        <v-btn block elevation="0" :ripple="false">Razredi</v-btn>
                    </router-link>
                </v-list-item>
                <v-list-item>
                    <v-btn block elevation="0" :ripple="false">Odjavi se</v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-toolbar-title>Edijak</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <transition
                name="fade"
                mode="out-in"
            >
                <router-view></router-view>
            </transition>
        </v-main>

        <v-footer></v-footer>

    </v-app>
</template>

<script>
import moment from "moment";

export default {
    name: "teacher",
    mounted() {
        moment.updateLocale('sl', 'sl')
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
