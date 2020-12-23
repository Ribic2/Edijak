<template>
    <v-col cols="12">
        <v-card height="100%" v-if="selectedSchedule !== null">
            <v-card-title>Predmet {{ selectedSchedule.subject }}</v-card-title>

            <v-card-actions>
                <v-card-text>Ura: {{ selectedSchedule.hour.id }}</v-card-text>
                <v-card-text>Profesor {{ selectedSchedule.teacher.nameAndSurname }}</v-card-text>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "hourInfo",
    computed:{
        selectedSchedule(){
            return this.$store.state.schedule.selectedSchedule
        }
    }
}
</script>

