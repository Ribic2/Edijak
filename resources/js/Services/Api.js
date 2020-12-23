import axios from 'axios'

const instance = axios.create({

})

export default {

    /**
     * Gets schedule for specific group
     * @param id
     * @returns {Promise<AxiosResponse<any>>}
     */
    getSchedule(id){
        return instance.get(`/api/group/${id}/schedule`)
    },

    /**
     * Sends request to login user
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(data){
        return instance.post('/api/user/login', data)
    },

    test(){
        return instance.post('/api/test')
    }
}

