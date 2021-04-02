<template>
    <v-card
        :color="data.isFinished ? '#ff9999' : null"
    >
        <v-card-title>
            {{ data.pollTitle}}
        </v-card-title>

        <v-card-text>
            {{ data.pollDescription }}

            <v-radio-group v-model="answer" v-if="!data.isFinished">
                <v-radio
                    v-for="(option, index) in options"
                    :key="index"
                    :value="option.id"
                    :label="`${option.option}`"
                ></v-radio>
            </v-radio-group>


            <v-btn
                @click="sendAnswer"
                v-if="!data.isFinished"
            >Oddaj</v-btn>
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
            answer: null
        }
    },
    name: "poll",
    props:[
        "data"
    ],
    methods:{
        sendAnswer(){
            let pollAndAnswer = {
                "pollId": this.data.id,
                "answerId": this.answer
            }

            Student.addAnswer(pollAndAnswer)
            .then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>

