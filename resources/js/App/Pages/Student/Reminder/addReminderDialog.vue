<template>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title>Dodaj opomnik</v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field
                        placeholder="test"
                    />

                    <v-text-field
                        placeholder="test"
                    />

                    <v-text-field
                        placeholder="test"
                    />

                    <v-date-picker landscape></v-date-picker>

                    <v-btn
                        color="secondary"
                        block
                        class="mt-2"
                        :ripple="false"
                    >Dodaj</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "addReminderDialog",
    data() {
        return {
            dialog: true
        }
    }
}
</script>

<style scoped>

</style>
