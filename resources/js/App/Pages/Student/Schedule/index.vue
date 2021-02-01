<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <schedule></schedule>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <hour-info></hour-info>
            </v-col>
            <v-col>
                <v-card>test</v-card>
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
