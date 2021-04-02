<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>Urnik</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <schedule></schedule>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <hour-info></hour-info>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import hourInfo from "./hourInfo";
import Schedule from "./Schedule";

export default {
    name: "View.vue",
    components: {
        Schedule,
        hourInfo
    }
}
</script>

<style scoped>

</style>
