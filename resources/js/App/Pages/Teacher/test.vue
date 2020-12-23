<template>
    <v-card>
        <v-btn @click="test()">Test</v-btn>
    </v-card>
</template>

<script>
import Api from "../../../Services/Api";
export default {
    name: "view",
    methods:{
        test(){
            Api.test()
        }
    }
}
</script>

<style scoped>

</style>
