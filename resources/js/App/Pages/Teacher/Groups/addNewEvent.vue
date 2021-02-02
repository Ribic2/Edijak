<template>
    <v-card height="700">
        <v-card-title>Dodaj nov dogodek</v-card-title>

        <v-card-text>
            <v-form>
                <v-text-field
                    placeholder="Ime dogodka"
                    v-model="event.eventTitle"
                >
                </v-text-field>

                <v-select
                    v-model="event.eventType"
                    label="Tip dogodka"
                    :items="types"
                >
                </v-select>

                <v-textarea
                    no-resize
                    v-model="event.eventDescription"
                    placeholder="Opis dogodka"
                >
                </v-textarea>

                <v-text-field
                    placeholder="Datum"
                    :disabled="date == null"
                    :value="date"
                >
                </v-text-field>

                <v-btn
                    block
                    color="primary"
                    rounded
                    @click="addEvent()"
                >
                    Dodaj dogodek
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";
const Teacher = Factory.get('Teacher');

export default {
    name: "addNewEvent",
    data(){
        return{
            event:{
                eventTitle: null,
                eventType: null,
                eventDescription: null,
            },
            defaultEvent:{
                eventTitle: null,
                eventType: null,
                eventDescription: null,
                group: null
            },
            types: [
                "Spraševanje",
                "Test",
                "Drugo"
            ]
        }
    },
    methods:{
        addEvent(){
            this.$store.state.Event.spinner = true
            Object.assign(this.event, {to: this.date})
            Object.assign(this.event, {groupId: this.group.id})
            Teacher.createEvent(this.event)
            .then((res)=>{
                console.log(res)
                // Resets array after successful request
                Object.assign(this.event, this.defaultEvent)
                this.$store.commit('SET_EVENT_DATE', null)
                this.$store.state.Event.spinner = false
                this.$store.state.Event.response = true

                this.$store.state.Event.responseColor = "green"
                this.$store.state.Event.responseText = "Nova anketa je bila dodana!"
                this.$store.state.Event.responseIcon = 'mdi-check'
            })
            .catch((err)=>{
                this.$store.state.Event.spinner = false
                this.$store.state.Event.response = true
                this.$store.state.Event.responseColor = "red"
                this.$store.state.Event.responseText = "Napaka pri dodajanju nove ankete!"
                this.$store.state.Event.responseIcon = 'mdi-emoticon-sad-outline'
            })
        },
    },
    computed:{
        date(){
            return this.$store.state.Event.selectEventDate
        },
        group(){
            return this.$store.state.Group.selectedGroup
        }
    }
}
</script>
