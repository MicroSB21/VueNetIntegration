import axios from 'axios'

const myAPI = axios.create({
    baseURL: "your URL",
    headers: {
        
    }
})

export default myAPI;