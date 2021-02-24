import api from "./api";
const prefix = 'student'

export default {
    getSchedule(id){
        return api.get(`${prefix}/schedule`)
    },
    getPollsAndEvents(){
        return api.get(`${prefix}/polls`)
    }
}
