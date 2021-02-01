<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <v-card>
                    {{ schedules }}
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card height="87vh">
                    <p>{{ date }}</p>
                    <p>{{ checkHour }}</p>
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
        }
    },
    computed: {
        checkHour() {
            let format = 'hh:mm'
            for (let i = 0; i < this.schedules.length; i++) {
                if (this.date.isBetween(moment(this.schedules[i].from, format), moment(this.schedules[i].to, format)))
                    return this.schedules[i]
            }
        }
    },
    created() {
        setInterval(() => this.date = moment(), 1000)
    },
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

