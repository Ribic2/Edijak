<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>Razredi</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="3" v-for="(group, index) in groups" :key="index">
                    <v-card height="400px">
                        <v-responsive :aspect-ratio="1" @click="selectGroup(group)">
                            <v-card-title>{{ group.groupName }}</v-card-title>
                        </v-responsive>
                    </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import group from "./group";
import {Factory} from "../../../../Services/Api/Factory";
const Teacher = Factory.get('Teacher')

export default {
    name: "view",
    components:{
        group
    },
    data(){
        return{
            groups: []
        }
    },
    // Gets all group that selected teacher is teaching
    async mounted() {
       await Teacher.getGroups()
        .then((response)=>{
            this.groups = response.data
        })
        .catch(()=>{
            console.log("error")
        })
    },
    methods:{
      selectGroup(e){
          this.$store.commit('SELECT_GROUP', e)
          this.$router.push({name: 'group', params:{id: group.id}})
      }
    }
}
</script>

<style scoped>

</style>
