import axios from "axios";

const apiRiot = axios.create({
    baseURL: 'https://valorant-api.com/v1',
})

export default apiRiot