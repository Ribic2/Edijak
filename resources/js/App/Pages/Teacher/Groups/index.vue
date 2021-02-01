<template>
    <v-container>
        <v-row>
            <v-col cols="4" v-for="(group, index) in groups.data" :key="index">
                    <v-card height="400px">
                        <v-responsive :aspect-ratio="1" >
                            {{ group.groupName }}
                        </v-responsive>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {Factory} from "../../../../Services/Api/Factory";
const Teacher = Factory.get('Teacher')

export default {
    name: "view",
    data(){
        return{
            groups: []
        }
    },
    async mounted() {
        this.groups = await Teacher.getGroups()
    }
}
</script>

<style scoped>

</style>
