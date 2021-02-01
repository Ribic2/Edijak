<template>
    <v-container fluid>
        <v-row>
            <v-col cols="3">
                <v-card>
                    <h1>test</h1>
                </v-card>
            </v-col>
            <v-col cols="9">
                <v-card>
                    <h1>test</h1>
                </v-card>
            </v-col>
        </v-row>

        <!-- Add new reminder dialog-->
        <add-reminder-dialog></add-reminder-dialog>
    </v-container>
</template>

<script>
import addReminderDialog from "./addReminderDialog";

export default {
    name: "view",
    components: {addReminderDialog},
    data() {
        return {
            test: null
        }
    },
    mounted() {
        Echo
            .listen('edijak', 'UpdateNotificationText', (e) => {
                console.log(e)
                this.test = e
            })
    }
}
</script>

<style scoped>

</style>
