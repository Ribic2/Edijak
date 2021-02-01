import api from "./api";
const prefix = 'teacher'

export default {
    getGroups(){
        return api.get(`${prefix}/groups`)
    },
    getSchedule(){
        return api.get(`${prefix}/schedule`)
    }
}
