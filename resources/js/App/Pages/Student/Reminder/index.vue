<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" xl="4" lg="6" md="6">
                <v-card :elevation="0">
                    <v-card-title>Dogodki</v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" v-for="(event, index) in events" :key="index">
                                <event :data="event"/>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" xl="8" lg="6" md="6">
                <v-card-title>Ankete</v-card-title>
                <v-divider></v-divider>
                <v-row class="mt-1">
                    <v-col cols="12" v-for="(poll, index) in polls" :key="index">
                        <poll :data="poll"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";
import Poll from "./poll";
import Event from "./event";

const Student = Factory.get('Student')

export default {
    name: "view",
    components: {Event, Poll},
    data() {
        return {
            polls: [],
            events: []
        }
    },
    mounted() {
        Student.getPollsAndEvents()
            .then((res) => {
                this.polls = res.data.polls
                this.events = res.data.events
            })
    }
}
</script>

