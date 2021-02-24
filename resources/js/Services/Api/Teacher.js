import api from "./api";
const prefix = 'teacher'

export default {
    getGroups(){
        return api.get(`${prefix}/groups`)
    },
    getSchedule(){
        return api.get(`${prefix}/schedule`)
    },
    getStudentsForSelectedHour(groupName){
        return api.post(`${prefix}/group/students`, {groupName})
    },
    createEvent(data){
        return api.post(`${prefix}/event`, data)
    },
    createPoll(data){
      return api.post(`${prefix}/poll`, data)
    },
    getGroup(id){
        return api.get(`${prefix}/group/${id}`)
    }
}
