import axios from 'axios'
import config from './configParamters.json'

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3', 
    params : {
        api_key : config.API_KEY
    }
})


export default instance