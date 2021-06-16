<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="font-weight-bold">Ura v živo</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xl="4" lg="5" md="6">
                <v-card min-height="82vh" v-if="students.length !== 0">
                    <v-card-title class="text-xl-h3 font-weight-bold">Dijaki</v-card-title>

                    <v-card
                        v-for="(student, index) in students"
                        :key="index"
                        :color="checkWaker(student)? 'grey': 'white'"
                        class="ma-2"
                    >
                        <v-card-actions>
                            <v-card-text class="text-xl-body-1">{{ student.name }} {{ student.surname }}</v-card-text>
                            <v-spacer></v-spacer>
                            <v-btn
                                :disabled="checkWaker(student)"
                                icon color="green"
                                @click="wakeCall(student.id)"
                            >
                                <v-icon>mdi-phone</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card>
                <v-card min-height="82vh" v-else>
                    <v-card-text class="text-center">
                        <v-icon size="200">mdi-emoticon-sad-outline</v-icon>
                        <p>Trenutno je odmor ali pa konec pouka!</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="8" lg="7" md="6">
                <v-card min-height="82vh">
                    <v-card-title class="text-xl-h3 font-weight-bold">
                        Informacije o uri
                    </v-card-title>

                    <v-card-text>
                        <h3>Trenutna ura: {{ currentHour }}</h3>
                    </v-card-text>
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
            group: null,
            currentGroup: null,
            isBreak: false,
            breakCounter: 0,
            students: [],
        }
    },
    methods: {
        wakeCall(id) {
            Teacher.wakeCall({"userId": id, "currentHour": this.currentHour})
                .then((res) => {
                    this.students = res.data
                })
        }
    },
    computed: {
        checkWaker(){
            return(student) =>{
                let check = false;
                if(student.waker.length === 0){
                    return false;
                }
                for(let i = 0; i < student.waker.length; i++){
                    if(student.waker[i].nonResponsive === 1 && student.waker[i].currentHour === this.currentHour){
                        check = true
                        break
                    }
                }
                return check;
            }
        },
        checkHour() {
            let format = 'hh:mm'
            this.schedules.forEach((e) => {
                if (this.date.isBetween(moment(e.from, format), moment(e.to, format))) {
                    // Checks if current hour has changed
                    if (this.currentHour !== e.schedules.hour) {
                        this.currentHour = e.schedules.hour;
                        Teacher.getGroupStudents(e.schedules.class)
                            .then((res) => {
                                this.students = res.data
                            })
                    }
                    return e
                }
            })
        },
    },
    created() {
        setInterval(() => {
            let format = 'hh:mm'
            this.date = moment()
            this.breakCounter = 0
            this.schedules.forEach((e) => {
                if (this.date.isBetween(moment(e.from, format), moment(e.to, format))) {
                    if(e.schedules !== null){
                        if (this.currentHour !== e.schedules.hour) {
                            this.currentHour = e.schedules.hour;
                            Teacher.getGroupStudents(e.schedules.class)
                                .then((res) => {
                                    this.students = res.data
                                })
                        }
                        return e
                    }
                } else {
                    this.breakCounter++
                }
            })

            if (this.schedules.length === this.breakCounter) {
                this.students = []
                this.currentHour = null
                this.breakCounter = 0
            }
        }, 1000)
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

