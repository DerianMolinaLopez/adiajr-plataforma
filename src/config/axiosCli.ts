import axios from 'axios';
//configuracion del axios apra rutas
const axiosCli = axios.create({
    baseURL: import.meta.env.VITE_URL_BACK,
})

axiosCli.interceptors.request.use(config=>{

    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
export default axiosCli