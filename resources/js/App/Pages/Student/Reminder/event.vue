<template>
    <v-card>
        <v-card-title>{{ data.eventTitle }}</v-card-title>
        <v-card-text>{{ data.description }}</v-card-text>
        <v-card-text>Kdaj: {{ data.to }}</v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "event",
    props:[
        "data"
    ]
}
</script>

<style scoped>

</style>
