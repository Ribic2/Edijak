<template>
    <v-card>
        <v-card-title>
            {{ data.pollTitle}}
        </v-card-title>
        <v-card-text>
            {{ data.pollDescription }}

            <v-radio-group v-model="answer" v-if="!data.isFinished" :disabled="answered != null || response">
                <v-radio
                    v-for="(option, index) in options"
                    :key="index"
                    :value="option.id"
                    :label="`${option.option}`"
                ></v-radio>
            </v-radio-group>
            <v-btn
                :disabled="answered != null || response"
                @click="sendAnswer"
                v-if="!data.isFinished"
            >Oddaj</v-btn>
        </v-card-text>

        <v-card-text v-if="answered != null">
            <p>Na to anketo ste že odgovorili z odgovorom <span class="font-weight-bold">{{ answered.option.option }}</span>!</p>
        </v-card-text>

        <v-card-text v-if="response">
            <v-chip :color="this.responseColor" large>{{ responseText }}</v-chip>
        </v-card-text>
    </v-card>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";
const Student = Factory.get('Student')

export default {
    data(){
        return{
            options: this.data.options,
            answer: null,
            // response
            responseColor: null,
            response: false,
            responseText: null,
        }
    },
    name: "poll",
    props:[
        "data",
        "answered"
    ],
    methods:{
        sendAnswer(){
            let pollAndAnswer = {
                "pollId": this.data.id,
                "answerId": this.answer
            }

            Student.addAnswer(pollAndAnswer)
            .then((res)=>{
                this.response = true
                this.responseText = res.data.response
                this.color = "green"
            })
            .catch((err)=>{
                this.response = true
                this.responseText = "Napaka pri oddajanju odgovora!"
                this.color = "red"
            })
        }
    }
}
</script>

