<template>
    <v-dialog v-model="$store.state.Event.response" width="400px">
        <v-card width="400px">
            <v-card-text class="text-center">
                <v-icon :color="$store.state.Event.responseColor" size="200">
                    {{ $store.state.Event.responseIcon }}
                </v-icon>
            </v-card-text>
            <v-card-text class="text-center">
                <p>{{ $store.state.Event.responseText }}</p>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "Response",
    props: [
        "icon",
        "color",
        "text"
    ]
}
</script>

<style scoped>

</style>
