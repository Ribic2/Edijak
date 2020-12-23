<template>
    <v-card>
        <h1>{{ test }}</h1>
    </v-card>
</template>

<script>
export default {
    name: "view",
    data(){
        return{
            test: null
        }
    },
    mounted() {
        Echo
            .listen('edijak', 'UpdateNotificationText', (e) => {
                console.log(e)
                this.test = e
            })
    }
}
</script>

<style scoped>

</style>
