import axios from '../axiosConfig'


export const request = serviceObject => axios(serviceObject)
.then(res => {
    return res.data 
}).catch(err => console.log(err))

