<template>
    <v-col
        cols="12"
    >
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
                    </tr>
                </thead>
                <tbody>
                    <schedule-row v-for="part in schedule" :key="part.id" :part="part"></schedule-row>
                </tbody>
            </template>
        </v-simple-table>
    </v-col>
</template>

<script>
import api from '../../../Services/Api'
import moment from 'moment'
import scheduleRow from "./scheduleRow";


export default {
    name: "Schedule.vue",
    components:{
        scheduleRow
    },
    data(){
        return {
            selectedSchedule: null,
        }
    },
    methods:{
        getSchedules(){
            api.getSchedule(1)
            .then((response)=>{
                this.$store.state.schedule.schedule = response.data.Schedule
            })
        },
        selectSchedule(part){
            this.$store.state.schedule.selectedSchedule = part
        },
    },
    computed:{
        schedule(){
            return this.$store.state.schedule.schedule
        },
    },
    mounted() {
        this.getSchedules()
    }
}
</script>

