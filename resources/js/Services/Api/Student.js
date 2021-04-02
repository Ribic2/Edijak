import api from "./api";
const prefix = 'student'

export default {
    getStudent(){
        return api.get(`${prefix}`)
    },
    getSchedule(){
        return api.get(`${prefix}/schedule`)
    },
    getPollsAndEvents(){
        return api.get(`${prefix}/polls`)
    },
    addAnswer(data){
        return api.post(`${prefix}/polls`, data)
    }
}
