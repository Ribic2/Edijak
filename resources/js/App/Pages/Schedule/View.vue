<template>
    <v-row>
        <schedule></schedule>
        <hour-info></hour-info>
    </v-row>
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
