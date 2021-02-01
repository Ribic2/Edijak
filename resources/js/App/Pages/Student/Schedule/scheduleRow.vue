<template>
    <tr
        :class="{'green': checkTime, 'white--text': checkTime}"
        @click="selectSchedule(part)"
    >
        <td>
            {{ part.hour.id }}
        </td>
        <td>
            {{ part.hour.from }} - {{ part.hour.to }}
        </td>
        <td>
            {{ part.subject }}
        </td>
        <td>
            {{ part.teacher.nameAndSurname }}
        </td>
        <td>
            {{ part.type }}
        </td>
    </tr>
</template>

<script>
import moment from "moment";

export default {
    name: "scheduleRow",
    props: [
        "part"
    ],
    data() {
        return {
            from: this.part.hour.from,
            to: this.part.hour.to,
            date: moment()
        }
    },
    methods: {
        selectSchedule(part) {
            this.$store.state.Schedule.selectedSchedule = part
        },
        updateCurrentTime(){
            this.date = moment()
        }
    },
    computed:{
        checkTime: function(){
            let format = 'hh:mm'
            return this.date.isBetween(moment(this.from, format), moment(this.to, format));
        },
    },
    created(){
        setInterval(()=> this.updateCurrentTime(), 1000)
    },
}
</script>

