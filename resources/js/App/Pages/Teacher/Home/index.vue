<template>
    <v-container>
        <v-row v-for="(schedule, index) in schedules" :key="index" no-gutters>
            <v-col cols="2">
                <v-card height="80" outlined class="rounded-0">
                    <p>{{ schedule.id }}</p>
                    <p>{{ schedule.from}} - {{ schedule.to }}</p>
                </v-card>
            </v-col>
            <v-col cols="10">
                <v-card
                    v-if="schedule.schedules"
                    height="80" outlined class="rounded-0"
                    color="#f2f2f2"
                >
                    {{ schedule.schedules.subject }}
                    {{ schedule.schedules.class }}
                </v-card>
                <v-card
                    v-else
                    height="80"
                    outlined
                    class="rounded-0"
                >
                    odmor
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import moment from "moment";
import {Factory} from "../../../../Services/Api/Factory";

const Teacher = Factory.get('Teacher')

export default {
    name: "view",
    data() {
        return {
            schedules: [],
            todayDay: null
        }
    },
    methods: {
        checkHour(id) {
            this.schedules.map((e) => {
                if (e.hour === id) {
                    return "hello"
                }
            })
        }
    },
    async mounted() {
        this.todayDay = moment().format('dddd');
        try {
            await Teacher.getSchedule()
                .then((response) => {
                    this.schedules = response.data
                })
        } catch (error) {
            console.log(error)
        }
    },
}
</script>

<style scoped>

</style>
