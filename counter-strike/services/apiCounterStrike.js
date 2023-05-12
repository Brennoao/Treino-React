import axios from "axios";

const apiCounterStrike = axios.create({
    baseURL: 'https://bymykel.github.io/CSGO-API/api/pt-BR',
})

export default apiCounterStrike