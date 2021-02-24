<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-card>
                    <v-card-title>Dijaki</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card height="87vh">
                    <p>{{ checkHour }}</p>
                    <p>{{ currentHour }}</p>
                    <p>{{ group }}</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";

const Teacher = Factory.get('Teacher')
import moment from "moment";

export default {
    name: "index",
    data() {
        return {
            schedules: [],
            date: moment(),
            currentHour: null,
            group: null
        }
    },
    computed: {
        checkHour() {
            let format = 'hh:mm'
            for (let i = 0; i < this.schedules.length; i++) {
                if (this.date.isBetween(moment(this.schedules[i].from, format), moment(this.schedules[i].to, format))) {
                    this.currentHour = this.schedules[i]
                    return this.schedules[i]
                }
            }
        },
    },
    /*created() {
        setInterval(() => {
            this.date = moment()
            if (this.checkHour == null || this.currentHour !== this.checkHour || this.group.length === 0) {
                Teacher.getStudentsForSelectedHour(this.currentHour.schedules.class)
                    .then((response) => {
                        this.group = response
                    })
            }
        }, 1000)
    },*/
    // Set schedules
    async mounted() {
        try {
            await Teacher.getSchedule()
                .then((response) => {
                    this.schedules = response.data
                })
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

