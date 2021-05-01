<template>
    <v-card height="700">
        <v-card-title>Nova anketa</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    placeholder="Ime ankete"
                    v-model="poll.pollTitle"
                >
                </v-text-field>

                <v-text-field
                    v-model="poll.pollDescription"
                    placeholder="Dodaj opis ankete">
                </v-text-field>
                <v-text-field
                    placeholder="Odgovori"
                    v-model="answer"
                    @keyup.enter="addAnswer()"
                >
                </v-text-field>

                <v-btn
                    block
                    color="primary"
                    rounded
                    @click="createPoll"
                >Dodaj novo anketo</v-btn>

                <v-list>
                    <v-list-item v-for="(value, index) in poll.options" :key="index">
                        <v-list-item-icon>
                            <v-icon>mdi-menu-right</v-icon>
                        </v-list-item-icon>
                        {{ value }}
                        <v-spacer>
                        </v-spacer>
                        <v-btn icon color="red" @click=" deleteAnswer(value)"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-list-item>
                </v-list>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";
const Teacher = Factory.get('Teacher');

export default {
    name: "newVoteEvent",
    props:[
      "groupId"
    ],
    data(){
        return{
            answer: null,
            poll:{
                options:[],
                pollTitle: null,
                pollDescription: null,
                groupsId: this.groupId
            },
            defaultPoll:{
                options:[],
                pollTitle: null,
                pollDescription: null,
                groups: null
            }
        }
    },
    methods:{
        addAnswer(){
            if(!this.poll.options.includes(this.answer)){
                this.poll.options.push(this.answer)
                this.answer = ""
            }
        },
        deleteAnswer(e){
            this.poll.options.pop(e)
        },
        createPoll(){
            this.$store.state.Event.spinner = true
            Teacher.createPoll(this.poll)
            .then((res)=>{
                this.$store.state.Event.spinner = false

                // Response
                this.$store.state.Event.response = true
                this.$store.state.Event.responseColor = "green"
                this.$store.state.Event.responseText = "Nova dogodek je bil dodan!"
                this.$store.state.Event.responseIcon = 'mdi-check'
                Object.assign(this.poll, this.defaultPoll)
            })
            .catch((err)=>{
                this.$store.state.Event.response = true
                this.$store.state.Event.spinner = false
                this.$store.state.Event.responseColor = "red"
                this.$store.state.Event.responseText = "Napaka pri dodajanju novega dogodka!"
                this.$store.state.Event.responseIcon = 'mdi-emoticon-sad-outline'
            })
        }
    }
}
</script>

<style scoped>

</style>
