<template>
    <v-card min-height="800" :elevation="0">
        <v-toolbar>
            <v-toolbar-title>{{ group.groupName }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="select = ''" class="ma-2">Nov dogodek</v-btn>
            <v-btn @click="select = 'vote'" class="ma-2">Nova anketa</v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
            <v-row>
                <v-col cols="12" xl="5" lg="6">
                    <v-card-text>
                        <new-vote-event :groupId="group.id" v-if="select === 'vote'"/>
                        <add-new-event :groupId="group.id" v-else/>
                    </v-card-text>
                </v-col>
                <v-col cols="12" xl="6" lg="6">
                    <v-card-text>
                        <v-sheet>
                            <v-toolbar>
                                <!-- Moves once month back -->
                                <v-btn fab text small color="grey darken-2" @click="prev">
                                    <v-icon small>mdi-chevron-left</v-icon>
                                </v-btn>

                                <!-- Displays selected month, default is current month -->
                                <v-toolbar-title v-if="$refs.calendar">
                                    {{ $refs.calendar.title }}
                                </v-toolbar-title>

                                <!-- Moves one month forward -->
                                <v-btn fab text small color="grey darken-2" @click="next">
                                    <v-icon small>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-toolbar>
                        </v-sheet>
                        <v-sheet height="600">
                            <v-calendar
                                ref="calendar"
                                v-model="focus"
                                color="primary"
                                :type="type"
                            ></v-calendar>
                        </v-sheet>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card-text>

        <response icon="mdi-check" color="green" text="Dogodek je bil uspešno dodan"></response>
    </v-card>

</template>

<script>
import Response from "../../../Components/Response";
import addNewEvent from "./addNewEvent";
import newVoteEvent from './newVoteEvent'
import {Factory} from "../../../../Services/Api/Factory";
import {mapState} from 'vuex'
const Teacher = Factory.get('Teacher')

export default {
    components: {
        addNewEvent,
        newVoteEvent,
        Response
    },
    name: "group",
    data() {
        return {
            select: '',
            toggle: true,
            type: 'month',
            selectEventDate: null,
        }
    },
    methods: {
        // Shows next month
        next() {
            this.$refs.calendar.next()
        },
        // Shows previous month
        prev() {
            this.$refs.calendar.prev()
        },
    },
    computed: {
        focus:{
            get(){
                return this.$store.state.Event.selectEventDate
            },
            set(value){
                this.$store.commit('SET_EVENT_DATE', value)
            }
        },
        group(){
            return this.$store.state.Group.selectedGroup
        }
    }
}
</script>
