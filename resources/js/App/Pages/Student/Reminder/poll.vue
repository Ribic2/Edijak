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
                    :label="`${option.option}`"
                ></v-radio>
            </v-radio-group>
        </v-card-text>
    </v-card>
</template>

<script>
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
    ]
}
</script>

