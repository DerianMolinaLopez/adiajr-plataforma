import axios from 'axios';
//configuracion del axios apra rutas
const axiosCli = axios.create({
    baseURL: import.meta.env.VITE_URL_BACK,
})
export default axiosCli