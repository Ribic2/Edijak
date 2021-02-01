import api from "./api";
const prefix = 'user'

export default {
   login(data){
       return api.post(`${prefix}/login`, data)
   }
}
