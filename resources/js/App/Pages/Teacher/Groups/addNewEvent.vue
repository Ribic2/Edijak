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

                <v-btn block
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
            Object.assign(this.event, {to: this.date})
            Object.assign(this.event, {groupId: this.group.id})
            Teacher.createEvent(this.event)
            .then((res)=>{
                console.log(res)
                // Resets array after successful request
                Object.assign(this.event, this.defaultEvent)
                this.$store.commit('SET_EVENT_DATE', null)
            })
            .catch((err)=>{
                console.log(err)
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
