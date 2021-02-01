<template>

    <v-card>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th>
                        Ura
                    </th>
                    <th>
                        Od - do
                    </th>
                    <th>
                        Predmet
                    </th>
                    <th>
                        Profesor
                    </th>
                    <th>
                        Tip ure
                    </th>
                </tr>
                </thead>
                <tbody>
                    <schedule-row v-for="part in schedule" :key="part.id" :part="part"></schedule-row>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";
import scheduleRow from "./scheduleRow";
import student from "../../../Layout/student";
const Student = Factory.get('Student')


export default {
    name: "Schedule.vue",
    components: {
        scheduleRow
    },
    data() {
        return {
            selectedSchedule: null,
        }
    },
    methods: {
        getSchedules() {
            Student.getSchedule(1)
                .then((response) => {
                    this.$store.state.Schedule.schedule = response.data.Schedule
                })
        },
        selectSchedule(part) {
            this.$store.state.Schedule.selectedSchedule = part
        },
    },
    computed: {
        schedule() {
            return this.$store.state.Schedule.schedule
        },
    },
    mounted() {
        this.getSchedules()
    }
}
</script>

