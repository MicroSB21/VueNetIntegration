import axios from 'axios'

const myAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //if you use authorization tokens you can set it here, you can access stores and other functions here to injecte the token
    // headers:
    // {
    //   'Authorization': `Bearer ${Token}`
    // }
})

export default myAPI;