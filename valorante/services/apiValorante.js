import axios from "axios";

const apiValorante = axios.create({
    baseURL: 'https://valorant-api.com/v1',
})

export default apiValorante