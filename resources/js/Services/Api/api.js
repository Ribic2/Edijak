import axios from 'axios'

export default axios.create({
    baseURL: '/api/',
    headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
})



